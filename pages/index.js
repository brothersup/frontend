import React from 'react';
import Router from 'next/router';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
  const movePage = e => {
    const { pageName } = e.target.dataset;

    Router.push(`/${pageName}`);
  };

  return (
    <div>
      <button type="button" onClick={movePage} data-page-name="signup">sign up</button>
    </div>
  );
};

export default Home;
