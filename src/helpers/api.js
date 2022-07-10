export const getApiErrorMessage = (error) =>
  error?.response?.data?.message[0] || error?.message || null;
