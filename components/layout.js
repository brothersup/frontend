import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Header />
    <div style={{ marginTop: '60px' }} />
    <Container>{children}</Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Layout;
