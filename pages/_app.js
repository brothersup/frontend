import { useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { ToastContainer, Slide } from 'react-toastify';
import { wrapper } from '../src/config/store';
import AuthProvider from '../src/utils/authProvider';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      sessionStorage.setItem('previousPage', `${window.location.pathname}${window.location.search}`);
    });
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer
        className="impct-toast"
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
        transition={Slide}
      />
    </AuthProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default wrapper.withRedux(App);
