import React from "react";
import { errorId, inputId } from "./lib/id-helpers";

export const Checkbox = ({
  context,
  formName,
  isDisabled = false,
  label,
  name,
  send
}) => {
  const fieldIsChecked = Boolean(context.fieldData[name]);
  const fieldIsInvalid = Boolean(context.fieldErrors[name]);
  return (
    <>
      <input
        aria-describedby={fieldIsInvalid ? errorId(formName, name) : null}
        aria-invalid={fieldIsInvalid}
        checked={fieldIsChecked}
        disabled={isDisabled}
        id={inputId(formName, name)}
        onChange={() => send("CHANGE", { name, value: !fieldIsChecked })}
        type="checkbox"
      />{" "}
      <label htmlFor={inputId(formName, name)}>{label}</label>
    </>
  );
};
