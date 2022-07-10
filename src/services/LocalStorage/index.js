const getAuthToken = () => {
  return localStorage.getItem('authToken') ?? null;
};

const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

export const LocalStorage = {
  getAuthToken,
  setAuthToken,
};
