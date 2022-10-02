export const validationRules = {
  description: [
    (value) => value?.length < 200 || 'Max length is 200 characters',
  ],
};
