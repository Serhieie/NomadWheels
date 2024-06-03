import * as yup from 'yup';

export const filterSchema = yup.object().shape({
  location: yup
    .string()
    .test('is-filled', 'At least one field must be filled', function (value) {
      const { details, form } = this.parent;
      return value || details.length > 0 || form;
    })
    .nullable(),
  details: yup.array().nullable(),
  form: yup.string().nullable(),
});
