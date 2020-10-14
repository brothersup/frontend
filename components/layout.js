import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Layout;
