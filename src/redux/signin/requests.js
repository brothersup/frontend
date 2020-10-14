import axios from 'axios';

export const sendFormRequest = formData =>
  axios.post(
    '/api/signin',
    {
      formData,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
