export const getApiErrorMessage = (error) => {
  if (Array.isArray(error?.response?.data?.message)) {
    return error.response.data.message?.[0];
  }

  return error?.response?.data?.message || error?.message || null;
};
