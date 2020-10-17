import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

export const HistoryContext = createContext({
  previousPage: null,
});

const HistoryProvider = ({ children }) => {
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      const currentPage = `${window.location.pathname}${window.location.search}`;
      if (currentPage !== '/signup' && currentPage !== '/signin') {
        setPreviousPage(currentPage);
      }
    });
  }, []);

  return <HistoryContext.Provider value={{ previousPage }}>{children}</HistoryContext.Provider>;
};

HistoryProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default HistoryProvider;
