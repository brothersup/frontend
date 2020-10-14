import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { setIdAction, setPasswordAction, sendFormAction } from '../src/redux/signin/actions';
import { makeSelectId, makeSelectPassword, makeSelectResult } from '../src/redux/signin/selectors';
import Layout from '../components/layout';
import { getToken, verifyToken } from '../src/utils';

const Signin = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const setId = id => {
    dispatch(setIdAction(id));
  };
  const setPassword = password => {
    dispatch(setPasswordAction(password));
  };
  const sendForm = () => {
    dispatch(sendFormAction());
  };

  const id = useSelector(makeSelectId());
  const password = useSelector(makeSelectPassword());
  const result = useSelector(makeSelectResult());

  useEffect(() => {
    const token = getToken();
    if (token && verifyToken(token)) {
      Router.push('/');
    }
  }, []);

  useEffect(() => {
    if (result.message === 'fail') {
      setErrorMessage('회원정보가 없습니다. 아이디나 비밀번호를 확인해주세요.');
    } else {
      setErrorMessage(null);
    }
  }, [result]);

  const handleSubmit = e => {
    if (id.length === 0 && password.length === 0) {
      setErrorMessage('아이디, 비밀번호를 입력해주세요');
      document.getElementById('id').focus();
    } else if (id.length === 0) {
      setErrorMessage('아이디를 입력해주세요');
      document.getElementById('id').focus();
    } else if (password.length === 0) {
      setErrorMessage('비밀번호를 입력해주세요');
      document.getElementById('password').focus();
    } else {
      setErrorMessage(null);
      sendForm();
    }
    e.preventDefault();
  };

  return (
    <Layout>
      <Form method="post" onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>아이디</FormLabel>
          <FormControl
            id="id"
            type="text"
            onChange={e => {
              setId(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>비밀번호</FormLabel>
          <FormControl
            id="password"
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </FormGroup>
        {errorMessage && <p>{errorMessage}</p>}
        <Button type="submit">sign in</Button>
      </Form>
    </Layout>
  );
};

export default Signin;
