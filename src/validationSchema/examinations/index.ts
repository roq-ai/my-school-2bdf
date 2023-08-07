import * as yup from 'yup';

export const examinationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  age_group: yup.string().required(),
  examiner_id: yup.string().nullable(),
});
