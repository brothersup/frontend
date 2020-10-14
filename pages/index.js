import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Layout from '../components/layout';
import { verifyToken } from '../src/utils';

const Home = () => {
  const [logon, setLogon] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLogon(token !== null);
  }, [logon]);

  const verify = () => {
    const validToken = verifyToken(localStorage.getItem('token'));
    console.log(validToken);
  };

  return (
    <Layout>
      <div>
        {logon && (
          <Button type="button" onClick={verify}>
            verify token
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default Home;
