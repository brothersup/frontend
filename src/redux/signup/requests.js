import axios from 'axios';

export const sendFormRequest = formData =>
  axios.post(
    '/api/signup',
    {
      formData,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

export const checkIdRequest = id => axios.get(`/api/check_id/${id}`);
export const checkNameRequest = name => axios.get(`/api/check_name/${name}`);
