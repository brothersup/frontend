import * as jwt from 'jsonwebtoken';
import * as config from '../config/jwt';

export const verifyToken = token => {
  let validToken = true;
  try {
    jwt.verify(token, config.secret);
  } catch (error) {
    validToken = false;
  }
  return validToken;
};

export const getToken = () => localStorage.getItem('token');

export const getPayload = token => jwt.verify(token, config.secret);
