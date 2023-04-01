import React from "react";
import { LoginForm as LoginFormComponent } from "./components/login-form";
import { LoginFormProvider } from "./providers/login-form-provider";

export const LoginForm = () => (
  <LoginFormProvider>
    <LoginFormComponent />
  </LoginFormProvider>
);
