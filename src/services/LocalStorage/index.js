const getAuthToken = () => {
  return localStorage.getItem('authToken') ?? null;
};

const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

export const LocalStorage = {
  getAuthToken,
  setAuthToken,
  removeAuthToken,
};
