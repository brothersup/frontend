import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../src/utils/authProvider';
import Layout from '../components/layout';

const FreeBoard = () => {
  const { token, isValid } = useContext(AuthContext);
  return (
    <Layout>
      <div>
        {token && isValid && (<Button>글쓰기</Button>)}
      </div>
    </Layout>
  );
};

export default FreeBoard;
