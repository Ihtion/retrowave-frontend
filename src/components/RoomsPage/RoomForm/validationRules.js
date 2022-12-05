export const validationRules = {
  description: [
    (value) => Boolean(value) || 'Description is required',
    (value) => value?.length < 200 || 'Max length is 200 characters',
  ],
  name: [
    (value) => Boolean(value) || 'Name is required',
    (value) => value?.length < 100 || 'Max length is 100 characters',
  ],
  password: [
    (value) => {
      if (value === '' || value === null || value.length >= 6) {
        return true;
      }

      return 'Password must be longer or equal to 6 characters';
    },
    (value) => {
      if (value === null) {
        return true;
      }

      return value?.length <= 50 || 'Password must be less than 50 characters';
    },
  ],
};
