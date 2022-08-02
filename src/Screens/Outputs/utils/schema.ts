import * as Yup from "yup";

export const outputSchema = Yup.object().shape({
  title: Yup.string().required("Título é obrigatório."),
  value: Yup.string().required("Valor é obrigatório."),
});
