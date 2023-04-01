import { useMachine } from "@xstate/react";
import React, { useRef } from "react";
import { ValidationMessages } from "../components/validation-messages";
import { createFormMachine } from "./machine";

export const FormProvider = ({
  children,
  formName,
  initialData,
  schema,
  submitForm
}) => {
  const errorSummary = useRef(null);
  const machine = createFormMachine({ initialData, schema, submitForm });
  const [current, send] = useMachine(machine, {
    actions: {
      focusOnErrors: () => {
        requestAnimationFrame(() => {
          if (errorSummary.current) {
            errorSummary.current.focus();
          }
        });
      }
    }
  });

  const isComplete = current.matches("complete");
  const isEditing = current.matches("editing");
  const isInvalid = current.matches("editing.validity.invalid");
  const isLoading = current.matches("editing.apiClient.sending");
  const childProps = {
    current,
    formName,
    isComplete,
    isEditing,
    isInvalid,
    isLoading,
    send
  };

  return (
    <>
      {isInvalid && (
        <ValidationMessages
          context={current.context}
          formName={formName}
          ref={errorSummary}
        />
      )}
      {React.Children.map(children, child =>
        React.cloneElement(child, childProps)
      )}
    </>
  );
};
