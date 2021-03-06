import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import { SEND_FORM, CHECK_ID, CHECK_NAME } from './constants';
import {
  sendFormSuccessAction,
  sendFormErrorAction,
  checkIdSuccessAction,
  checkIdErrorAction,
  checkNameSuccessAction,
  checkNameErrorAction,
} from './actions';
import { makeSelectId, makeSelectPassword, makeSelectName, makeSelectEmail } from './selectors';
import { sendFormRequest, checkIdRequest, checkNameRequest } from './requests';

function* sendForm() {
  const id = yield select(makeSelectId());
  const password = yield select(makeSelectPassword());
  const name = yield select(makeSelectName());
  const email = yield select(makeSelectEmail());
  const formData = { id, password, name, email };

  try {
    const res = yield call(sendFormRequest, formData);
    yield put(sendFormSuccessAction());

    if (res.data.result) {
      alert('가입이 완료되었습니다!');
      yield call(Router.push, '/');
    }
  } catch (error) {
    yield put(sendFormErrorAction(error));
  }
}

function* checkId() {
  const id = yield select(makeSelectId());

  try {
    const res = yield call(checkIdRequest, id);
    yield put(checkIdSuccessAction(res.data.response));
  } catch (error) {
    yield put(checkIdErrorAction(error));
  }
}

function* checkName() {
  const name = yield select(makeSelectName());

  try {
    const res = yield call(checkNameRequest, name);
    yield put(checkNameSuccessAction(res.data.response));
  } catch (error) {
    yield put(checkNameErrorAction(error));
  }
}

function* signupSaga() {
  yield all([
    takeLatest(SEND_FORM, sendForm),
    takeLatest(CHECK_ID, checkId),
    takeLatest(CHECK_NAME, checkName),
  ]);
}

export default signupSaga;
