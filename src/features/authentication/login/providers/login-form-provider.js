import React from "react";
import { object } from "yup";
import { FormProvider } from "../../../form";
import { simulatedBadApi } from "../../lib/fake-api";
import {
  emailSchema,
  passwordSchema,
  shouldRememberMeSchema
} from "../../schema";

const loginSchema = object({
  email: emailSchema,
  password: passwordSchema,
  shouldRememberMe: shouldRememberMeSchema
});

export const LoginFormProvider = ({ children }) => (
  <FormProvider
    formName="login"
    initialData={{
      email: "",
      password: "",
      shouldRememberMe: false
    }}
    schema={loginSchema}
    submitForm={simulatedBadApi}
  >
    {children}
  </FormProvider>
);
