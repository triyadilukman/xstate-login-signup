import React from "react";
import { SignupForm as SignupFormComponent } from "./components/signup-form";
import { SignupFormProvider } from "./providers/signup-form-provider";

export const SignupForm = () => (
  <SignupFormProvider>
    <SignupFormComponent />
  </SignupFormProvider>
);
