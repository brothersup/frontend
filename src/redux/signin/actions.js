import { SET_ID, SET_PASSWORD, SEND_FORM, SEND_FORM_SUCCESS, SEND_FORM_ERROR } from './constants';

export function setIdAction(id) {
  return {
    type: SET_ID,
    id,
  };
}

export function setPasswordAction(password) {
  return {
    type: SET_PASSWORD,
    password,
  };
}

export function sendFormAction() {
  return {
    type: SEND_FORM,
  };
}

export function sendFormSuccessAction(response) {
  return {
    type: SEND_FORM_SUCCESS,
    response,
  };
}

export function sendFormErrorAction(error) {
  return {
    type: SEND_FORM_ERROR,
    error,
  };
}
