import React from "react";
import { Spinner } from "../../../../components/spinner";
import { Checkbox, Input, SubmitButton } from "../../../form";

export const LoginForm = ({
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
        <h3>Thanks, you are now signed in</h3>
      </div>
    );
  }
  if (isEditing) {
    return (
      <>
        <Spinner
          description="The Login Form is being submitted..."
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
            <Input
              autoComplete="current-password"
              context={current.context}
              isDisabled={isLoading}
              isRequired={true}
              formName={formName}
              label="Password"
              name="password"
              send={send}
              type="password"
            />
          </li>
          <li>
            <Checkbox
              context={current.context}
              isDisabled={isLoading}
              formName={formName}
              label="Remember Me"
              name="shouldRememberMe"
              send={send}
            />
          </li>
          <li>
            <SubmitButton
              context={current.context}
              formName={formName}
              isDisabled={isLoading}
              send={send}
            >
              {isLoading ? "Logging in..." : "Login"}
            </SubmitButton>
          </li>
        </ol>
      </>
    );
  }
  return null;
};
