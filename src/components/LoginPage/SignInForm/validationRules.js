export const validationRules = {
  email: [(value) => Boolean(value?.trim()) || 'E-mail is required'],
  password: [(value) => Boolean(value) || 'Password is required'],
};
