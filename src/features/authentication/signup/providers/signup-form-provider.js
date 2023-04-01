import React from "react";
import { object } from "yup";
import { FormProvider } from "../../../form";
import { simulatedBadApi } from "../../lib/fake-api";
import {
  confirmPasswordSchema,
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
  shouldRememberMeSchema
} from "../../schema";

const signupSchema = object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
  shouldRememberMe: shouldRememberMeSchema
});

export const SignupFormProvider = ({ children }) => (
  <FormProvider
    formName="signup"
    initialData={{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      shouldRememberMe: false
    }}
    schema={signupSchema}
    submitForm={simulatedBadApi}
  >
    {children}
  </FormProvider>
);
