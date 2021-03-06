import { call, select, put, takeLatest } from 'redux-saga/effects';
import { SEND_FORM } from './constants';
import { sendFormSuccessAction, sendFormErrorAction } from './actions';
import { makeSelectId, makeSelectPassword } from './selectors';
import { sendFormRequest } from './requests';

function* sendForm() {
  const id = yield select(makeSelectId());
  const password = yield select(makeSelectPassword());
  const formData = { id, password };

  try {
    const res = yield call(sendFormRequest, formData);
    if (res.data.token) {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
      }
      localStorage.setItem('token', res.data.token);
    }
    yield put(sendFormSuccessAction(res.data));
  } catch (error) {
    yield put(sendFormErrorAction(error));
  }
}

function* signinSaga() {
  yield takeLatest(SEND_FORM, sendForm);
}

export default signinSaga;
