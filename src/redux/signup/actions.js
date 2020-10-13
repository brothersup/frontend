import {
  SEND_FORM,
  SEND_FORM_SUCCESS,
  SEND_FORM_ERROR,
  SET_ID,
  CHECK_ID,
  CHECK_ID_SUCCESS,
  CHECK_ID_ERROR,
  SET_PASSWORD,
  SET_NAME,
  CHECK_NAME,
  CHECK_NAME_SUCCESS,
  CHECK_NAME_ERROR,
  SET_EMAIL,
} from './constants';

export function sendFormAction(formData) {
  return {
    type: SEND_FORM,
    formData,
  };
}

export function sendFormSuccessAction() {
  return {
    type: SEND_FORM_SUCCESS,
  };
}

export function sendFormErrorAction(error) {
  return {
    type: SEND_FORM_ERROR,
    error,
  };
}

export function setIdAction(id) {
  return {
    type: SET_ID,
    id,
  };
}

export function checkIdAction() {
  return {
    type: CHECK_ID,
  };
}

export function checkIdSuccessAction(response) {
  return {
    type: CHECK_ID_SUCCESS,
    response,
  };
}

export function checkIdErrorAction(error) {
  return {
    type: CHECK_ID_ERROR,
    error,
  };
}

export function setPasswordAction(password) {
  return {
    type: SET_PASSWORD,
    password,
  };
}

export function setNameAction(name) {
  return {
    type: SET_NAME,
    name,
  };
}

export function checkNameAction() {
  return {
    type: CHECK_NAME,
  };
}

export function checkNameSuccessAction(response) {
  return {
    type: CHECK_NAME_SUCCESS,
    response,
  };
}

export function checkNameErrorAction(error) {
  return {
    type: CHECK_NAME_ERROR,
    error,
  };
}

export function setEmailAction(email) {
  return {
    type: SET_EMAIL,
    email,
  };
}
