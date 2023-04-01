import React from "react";
import { Spinner } from "../../../../components/spinner";
import { Input, SubmitButton } from "../../../form";

export const RecoverPasswordForm = ({
  current,
  formName,
  isComplete,
  isEditing,
  isLoading,
  send
}) => {
  if (isComplete) {
    return (
      <div role="alert">
        <h3>Password Recovery Complete</h3>
        <p>
          If you have an account with us, you will receive an Email with
          instructions on how to create a new Password.
        </p>
      </div>
    );
  }
  if (isEditing) {
    return (
      <>
        <Spinner
          description="The Recover Password Form is being submitted..."
          isLoading={isLoading}
        />
        <ol>
          <li>
            <Input
              autoComplete="email"
              context={current.context}
              isDisabled={isLoading}
              isRequired={true}
              formName={formName}
              label="Email"
              name="email"
              send={send}
              type="email"
            />
          </li>
          <li>
            <SubmitButton
              context={current.context}
              formName={formName}
              isDisabled={isLoading}
              send={send}
            >
              {isLoading ? "Recovering Password..." : "Recover Password"}
            </SubmitButton>
          </li>
        </ol>
      </>
    );
  }
  return null;
};
