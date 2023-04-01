import { isNonEmptyObject, isObject, isNonEmptyString } from "expect-more";
import { assign, Machine, send } from "xstate";

export const createFormMachine = ({ initialData, schema, submitForm }) =>
  Machine(
    {
      id: "form",
      initial: "editing",
      context: {
        /** The current values entered into the form at any given time */
        fieldData: initialData,
        /**
         * Validation Errors:
         * - Discovered locally by Yup, such as a password which is too short.
         * - Discovered remotely by the Server, such as "An Account is already
         *   Registered using this Email Address".
         * - Errors received by the Server which apply to the whole form, such
         *   as "We are experiencing Technical Issues, please try again later"
         *   are attributed to the Submit Button so they are read out by Screen
         *   Readers when focusing onto that Element.
         */
        fieldErrors: {}
      },
      states: {
        editing: {
          type: "parallel",
          states: {
            formData: {
              on: {
                CHANGE: {
                  actions: "setValue"
                },
                SUBMIT: {
                  actions: ["resetErrors", "setLocalFieldErrors"]
                }
              }
            },
            validity: {
              initial: "hidden",
              states: {
                hidden: {
                  on: {
                    SUBMIT: "evaluating"
                  }
                },
                evaluating: {
                  always: [
                    {
                      cond: "hasFieldErrors",
                      target: "invalid"
                    },
                    {
                      target: "valid"
                    }
                  ]
                },
                invalid: {
                  entry: "focusOnErrors",
                  on: {
                    REJECTED: "evaluating",
                    SUBMIT: "evaluating"
                  }
                },
                valid: {
                  on: {
                    REJECTED: "evaluating",
                    SUBMIT: "evaluating"
                  }
                }
              }
            },
            apiClient: {
              initial: "idle",
              states: {
                idle: {
                  on: {
                    SUBMIT: [
                      {
                        cond: "canSubmit",
                        target: "idle"
                      },
                      {
                        target: "sending"
                      }
                    ]
                  }
                },
                sending: {
                  invoke: {
                    id: "sendForm",
                    src: "submitForm",
                    onError: {
                      actions: ["setRemoteErrors", "sendRejected"],
                      target: "idle"
                    },
                    onDone: {
                      target: "#form.complete"
                    }
                  }
                }
              }
            }
          }
        },
        complete: {
          entry: "onComplete",
          type: "final"
        }
      }
    },
    {
      guards: {
        canSubmit: (ctx) => !schema.isValidSync(ctx.fieldData),
        hasFieldErrors: (ctx) => isNonEmptyObject(ctx.fieldErrors)
      },
      actions: {
        focusOnErrors: () => {
          console.log("Call .focus() on list of validation errors");
        },
        onComplete: () => {},
        resetErrors: assign({
          fieldErrors: {}
        }),
        sendRejected: send("REJECTED"),
        setLocalFieldErrors: assign({
          fieldErrors: (ctx) => {
            const fieldErrors = {};
            try {
              schema.validateSync(ctx.fieldData, { abortEarly: false });
            } catch ({ inner }) {
              inner.forEach(({ path, errors }) => {
                fieldErrors[path] = errors[0];
              });
            }
            return fieldErrors;
          }
        }),
        setRemoteErrors: assign({
          fieldErrors: (ctx, event) => {
            console.log(event);
            const { data } = event;
            const { message, remoteFieldErrors } = data;
            const a = isObject(remoteFieldErrors) ? remoteFieldErrors : {};
            const b = isNonEmptyString(message) ? { submit: message } : {};
            return data && (message || remoteFieldErrors) ? { ...a, ...b } : {};
          }
        }),
        setValue: assign({
          fieldData: (ctx, { name, value }) =>
            ctx.fieldData[name] === value
              ? ctx.fieldData
              : { ...ctx.fieldData, [name]: value }
        })
      },
      services: {
        submitForm: ({ fieldData }) => submitForm({ fieldData })
      }
    }
  );
