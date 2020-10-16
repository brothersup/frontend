import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { getToken, verifyToken } from './auth';

export const AuthContext = createContext({
  token: false,
  isValid: false,
  previousPage: null,
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const signout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsValid(false);
  };

  useEffect(() => {
    const token1 = getToken();
    const isValid1 = token1 ? verifyToken(token1) : false;
    setToken(token1);
    setIsValid(isValid1);
  });

  return (
    <>
      {token !== false && <AuthContext.Provider value={{ token, isValid, signout }}>{children}</AuthContext.Provider>}
    </>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default AuthProvider;
