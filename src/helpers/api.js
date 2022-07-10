export const getApiErrorMessage = (error) =>
  error?.response?.data?.message || error?.message || null;
