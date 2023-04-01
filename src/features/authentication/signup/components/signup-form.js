import React from "react";
import { Spinner } from "../../../../components/spinner";
import { Checkbox, Input, SubmitButton } from "../../../form";

export const SignupForm = ({
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
        <h3>
          Thanks {current.context.fieldData.firstName}, you are now Registered
        </h3>
        <p>Check your Email for all the details.</p>
      </div>
    );
  }
  if (isEditing) {
    return (
      <>
        <Spinner
          description="The Signup Form is being submitted..."
          isLoading={isLoading}
        />
        <ol>
          <li>
            <Input
              autoComplete="given-name"
              context={current.context}
              isDisabled={isLoading}
              isRequired={true}
              formName={formName}
              label="First Name"
              name="firstName"
              send={send}
              type="text"
            />
          </li>
          <li>
            <Input
              autoComplete="family-name"
              context={current.context}
              isDisabled={isLoading}
              isRequired={true}
              formName={formName}
              label="Last Name"
              name="lastName"
              send={send}
              type="text"
            />
          </li>
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
              autoComplete="new-password"
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
            <Input
              autoComplete="new-password"
              context={current.context}
              isDisabled={isLoading}
              isRequired={true}
              formName={formName}
              label="Confirm Password"
              name="confirmPassword"
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
              {isLoading ? "Signing Up..." : "Sign Up"}
            </SubmitButton>
          </li>
        </ol>
      </>
    );
  }
  return null;
};
