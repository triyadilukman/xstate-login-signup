import React from "react";
import { errorId, inputId } from "./lib/id-helpers";

export const SubmitButton = ({
  children,
  context,
  formName,
  isDisabled = false,
  send
}) => {
  const name = "submit";
  const submissionFailed = Boolean(context.fieldErrors[name]);
  return (
    <button
      aria-describedby={submissionFailed ? errorId(formName, name) : null}
      aria-invalid={submissionFailed}
      disabled={isDisabled}
      id={inputId(formName, name)}
      onClick={() => send("SUBMIT")}
      type="submit"
    >
      {children}
    </button>
  );
};
