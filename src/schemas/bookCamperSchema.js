import * as yup from 'yup';

export const bookCamperSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  date: yup.date().required('Date is required'),
  comment: yup.string().nullable(),
});
