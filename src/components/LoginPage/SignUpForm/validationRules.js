export const validationRules = {
  email: [
    (value) => Boolean(value) || 'E-mail is required',
    (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid',
  ],
  password: [
    (value) => Boolean(value) || 'Password is required',
    (value) =>
      value?.length >= 6 || 'Password must be longer or equal to 6 characters',
    (value) =>
      value?.length <= 50 || 'Password must be less than 50 characters',
  ],
  passwordConfirmation: [
    (value) => Boolean(value) || 'Password confirmation is required',
  ],
};
