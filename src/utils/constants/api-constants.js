export const baseUrl = '65.21.240.211:5000';

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};