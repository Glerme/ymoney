import * as Yup from 'yup';

export const outputSchema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório.'),
  value: Yup.string().required('O valor é obrigatório.'),
  description: Yup.string().required('A descrição é obrigatória.'),
  type: Yup.string().required('O tipo é obrigatório.'),
});