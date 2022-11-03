export const validationRules = {
  description: [
    (value) => Boolean(value) || 'Description is required',
    (value) => value?.length < 200 || 'Max length is 200 characters',
  ],
  name: [
    (value) => Boolean(value) || 'Name is required',
    (value) => value?.length < 100 || 'Max length is 100 characters',
  ],
};
