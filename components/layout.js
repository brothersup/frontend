import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Header from './header';

const Layout = ({ children }) => (
  <div style={{ height: '100%', paddingTop: '80px' }}>
    <Header />
    <Container style={{ height: '100%' }}>{children}</Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Layout;
