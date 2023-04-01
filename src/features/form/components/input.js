import React from "react";
import { errorId, inputId } from "./lib/id-helpers";

export const Input = ({
  autoComplete = "off",
  context,
  formName,
  isDisabled = false,
  isRequired = false,
  label,
  name,
  send,
  type = "text"
}) => {
  const fieldIsInvalid = Boolean(context.fieldErrors[name]);
  return (
    <>
      <label htmlFor={inputId(formName, name)}>{label}</label>{" "}
      <input
        aria-describedby={fieldIsInvalid ? errorId(formName, name) : null}
        aria-invalid={fieldIsInvalid}
        aria-required={isRequired}
        autoComplete={autoComplete}
        disabled={isDisabled}
        id={inputId(formName, name)}
        onChange={event => send("CHANGE", { name, value: event.target.value })}
        type={type}
        value={context.fieldData[name]}
      />
    </>
  );
};
