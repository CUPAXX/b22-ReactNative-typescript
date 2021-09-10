import axios from 'axios';

export const http = (token = null) => {
  const headers: any = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
  });
};
