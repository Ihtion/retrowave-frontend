export const parseJwt = (token) => {
  return JSON.parse(atob(token.split('.')[1]));
};
