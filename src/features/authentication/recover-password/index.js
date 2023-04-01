import React from "react";
import { RecoverPasswordForm as RecoverPasswordFormComponent } from "./components/recover-password-form";
import { RecoverPasswordFormProvider } from "./providers/recover-password-provider";

export const RecoverPasswordForm = () => (
  <RecoverPasswordFormProvider>
    <RecoverPasswordFormComponent />
  </RecoverPasswordFormProvider>
);
