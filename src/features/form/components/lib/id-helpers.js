export const inputId = (formName, name) => `${formName}-${name}`;
export const inputHref = (formName, name) => `#${inputId(formName, name)}`;
export const errorId = (formName, name) => `${inputId(formName, name)}-error`;
