import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import * as PasswordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';

import {
  sendFormAction,
  checkIdAction,
  setIdAction,
  setPasswordAction,
  setNameAction,
  checkNameAction,
  setEmailAction,
} from '../src/redux/signup/actions';
import {
  makeSelectId,
  makeSelectPassword,
  makeSelectName,
  makeSelectEmail,
  makeSelectAvailableId,
  makeSelectAvailableName,
} from '../src/redux/signup/selectors';

const Signup = () => {
  const [focusId, setFocusId] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusPasswordConfirm, setFocusPasswordConfirm] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const setId = id => {
    dispatch(setIdAction(id));
  };
  const checkId = () => {
    dispatch(checkIdAction());
  };
  const setPassword = password => {
    dispatch(setPasswordAction(password));
  };
  const setName = name => {
    dispatch(setNameAction(name));
  };
  const checkName = () => {
    dispatch(checkNameAction());
  };
  const setEmail = email => {
    dispatch(setEmailAction(email));
  };
  const sendForm = formData => {
    dispatch(sendFormAction(formData));
  };

  const id = useSelector(makeSelectId());
  const password = useSelector(makeSelectPassword());
  const name = useSelector(makeSelectName());
  const email = useSelector(makeSelectEmail());
  const availableId = useSelector(makeSelectAvailableId());
  const availableName = useSelector(makeSelectAvailableName());

  useEffect(() => {
    if (focusId) {
      if (id.length >= 4) {
        checkId(id);
        if (availableId) {
          setErrors({ ...errors, id: null });
        } else {
          setErrors({
            ...errors,
            id: {
              type: 'usedId',
              message: '이미 사용중인 아이디 입니다.',
            },
          });
        }
      } else {
        setErrors({
          ...errors,
          id: {
            type: 'minLength',
            message: '4글자 이상 아이디를 사용해주세요.',
          },
        });
      }
    }
  }, [focusId, id, availableId]);

  useEffect(() => {
    const schema = new PasswordValidator();
    schema
      .is().min(8)
      .is().max(20)
      .has().lowercase()
      .has().digits(1)
      .has().symbols(1)
      .has().not().spaces();

    if (focusPassword) {
      if (schema.validate(password)) {
        setErrors({
          ...errors,
          password: null,
        });
      } else {
        setErrors({
          ...errors,
          password: {
            type: 'invalidFormat',
            message: '비밀번호는 8~20글자 사이, 영문(소문자),숫자,특수문자가 모두 포함된 형식이어야 합니다.',
          },
        });
      }
    }
  }, [focusPassword, password]);

  useEffect(() => {
    if (focusPasswordConfirm) {
      if (passwordConfirm === password) {
        setErrors({
          ...errors,
          passwordConfirm: null,
        });
      } else {
        setErrors({
          ...errors,
          passwordConfirm: {
            type: 'discord',
            message: '비밀번호와 일치하지 않습니다.',
          },
        });
      }
    }
  }, [focusPasswordConfirm, passwordConfirm]);

  useEffect(() => {
    if (focusName) {
      if (name.length >= 2) {
        checkName(name);
        if (availableName) {
          setErrors({ ...errors, name: null });
        } else {
          setErrors({
            ...errors,
            name: {
              type: 'usedName',
              message: '이미 사용중인 이름입니다',
            },
          });
        }
      } else {
        setErrors({
          ...errors,
          name: {
            type: 'minLength',
            message: '2글자 이상 이름을 사용해주세요.',
          },
        });
      }
    }
  }, [focusName, name, availableName]);

  useEffect(() => {
    if (focusEmail) {
      if (EmailValidator.validate(email)) {
        setErrors({
          ...errors,
          email: null,
        });
      } else {
        setErrors({
          ...errors,
          email: {
            type: 'invalidFormat',
            message: '유효하지 않은 형식의 이메일 주소입니다.',
          },
        });
      }
    }
  }, [focusEmail, email]);

  const handleSubmit = e => {
    if (!focusId || errors.id !== null) {
      document.getElementById('id').focus();
    } else if (!focusPassword || errors.password !== null) {
      document.getElementById('password').focus();
    } else if (!focusPasswordConfirm || errors.passwordConfirm !== null) {
      document.getElementById('passwordConfirm').focus();
    } else if (!focusName || errors.name !== null) {
      document.getElementById('name').focus();
    } else if (!focusEmail || errors.email !== null) {
      document.getElementById('email').focus();
    } else {
      sendForm({
        id,
        password,
        name,
        email,
      });
    }
    e.preventDefault();
  };

  return (
    <Container>
      <Form method="post" onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>아이디</FormLabel>
          <FormControl
            type="text"
            id="id"
            placeholder="enter your id"
            onChange={e => {
              setId(e.target.value);
            }}
            onFocus={() => {
              setFocusId(true);
            }}
          />
          {errors.id && <p>{errors.id.message}</p>}
        </FormGroup>
        <FormGroup>
          <FormLabel>비밀번호</FormLabel>
          <FormControl
            type="password"
            id="password"
            placeholder="enter your password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            onFocus={() => {
              setFocusPassword(true);
            }}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </FormGroup>
        <FormGroup>
          <FormLabel>비밀번호 확인</FormLabel>
          <FormControl
            type="password"
            id="passwordConfirm"
            placeholder="enter your password"
            onChange={e => {
              setPasswordConfirm(e.target.value);
            }}
            onFocus={() => {
              setFocusPasswordConfirm(true);
            }}
          />
          {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        </FormGroup>
        <FormGroup>
          <FormLabel>이름</FormLabel>
          <FormControl
            type="text"
            id="name"
            placeholder="enter your name"
            onChange={e => {
              setName(e.target.value);
            }}
            onFocus={() => {
              setFocusName(true);
            }}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </FormGroup>
        <FormGroup>
          <FormLabel>이메일</FormLabel>
          <FormControl
            type="email"
            id="email"
            placeholder="enter your email address"
            onChange={e => {
              setEmail(e.target.value);
            }}
            onFocus={() => {
              setFocusEmail(true);
            }}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </FormGroup>
        <Button type="submit">submit</Button>
      </Form>
    </Container>
  );
};

export default Signup;
