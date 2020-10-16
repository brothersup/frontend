import React, { useEffect, useContext, useState } from 'react';
import Router from 'next/router';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../src/utils/authProvider';
import Layout from '../components/layout';
import { getPayload } from '../src/utils/auth';

const Profile = () => {
  const { token, isValid } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [modify, setModify] = useState(false);

  useEffect(() => {
    if (token && isValid) {
      const payload = getPayload(token);
      setUser({
        id: payload.id,
        name: payload.name,
        email: payload.email,
      });
    } else {
      Router.push('/signin');
    }
  }, [token, isValid]);

  return (
    <Layout>
      {user && (
        <>
          <div>id: {user.id}</div>
          <div>name: {user.name}</div>
          <div>email: {user.email}</div>
          {modify ? (
            <Button type="button" onClick={() => setModify(false)}>
              저장
            </Button>
          ) : (
            <Button type="button" onClick={() => setModify(true)}>
              정보 수정
            </Button>
          )}
          <Button type="button">비밀번호 변경</Button>
        </>
      )}
    </Layout>
  );
};

export default Profile;
