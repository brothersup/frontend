import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import Layout from '../components/layout';
import { AuthContext } from '../src/utils/authProvider';

const Home = () => {
  const { token, isValid } = useContext(AuthContext);

  const verify = () => {
    console.log(isValid);
  };

  return (
    <Layout>
      <div>
        {token && isValid && (
          <Button type="button" onClick={verify}>
            verify token
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default Home;
