import { all, fork } from 'redux-saga/effects';
import signupSaga from '../redux/signup/saga';

function* rootSaga() {
  yield all([fork(signupSaga)]);
}

export default rootSaga;
