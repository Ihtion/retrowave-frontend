export const getApiErrorMessage = (error) =>
  error?.response?.data?.message?.[0] ||
  error?.response?.data?.message ||
  error?.message ||
  null;
