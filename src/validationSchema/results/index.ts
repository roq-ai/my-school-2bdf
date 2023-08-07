import * as yup from 'yup';

export const resultValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  award: yup.string().nullable(),
  client_id: yup.string().nullable(),
  examination_id: yup.string().nullable(),
});
