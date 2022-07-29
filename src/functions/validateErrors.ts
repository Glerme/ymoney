import * as Yup from "yup";

export const validateErrors = async (
  schema: Yup.ObjectSchema<Record<string, any>>,
  fields: any
) => {
  const validationErrors: any = {};

  await schema.validate(fields, { abortEarly: false }).catch((err) => {
    err.inner.forEach((e: any) => (validationErrors[e.path] = e.message));
  });

  console.log("DENTRO DO VALIDATION ERROR", validationErrors);

  return validationErrors;
};
