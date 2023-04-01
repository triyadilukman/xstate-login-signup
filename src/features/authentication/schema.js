import { boolean, ref, string } from "yup";

export const firstNameSchema = string().required("A First Name is needed");

export const lastNameSchema = string().required("A Last Name is needed");

export const emailSchema = string()
  .email("Email does not appear to be valid")
  .required("An Email Address is needed");

export const passwordSchema = string().min(
  10,
  "Password must be at least 10 Characters long"
);

export const confirmPasswordSchema = string().oneOf(
  [ref("password"), null],
  "Passwords must match"
);

export const shouldRememberMeSchema = boolean().default(false);
