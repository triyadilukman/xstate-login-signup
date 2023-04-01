import React from "react";
import { object } from "yup";
import { FormProvider } from "../../../form";
import { simulatedBadApi } from "../../lib/fake-api";
import { emailSchema } from "../../schema";

// @FIXME: rename file to Rrecover-password-form-provider.js, codesandbox has a
// filename length limit

const recoverPasswordSchema = object({
  email: emailSchema
});

export const RecoverPasswordFormProvider = ({ children }) => (
  <FormProvider
    formName="recoverPassword"
    initialData={{
      email: ""
    }}
    schema={recoverPasswordSchema}
    submitForm={simulatedBadApi}
  >
    {children}
  </FormProvider>
);
