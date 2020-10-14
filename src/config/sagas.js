import { all, fork } from 'redux-saga/effects';
import signupSaga from '../redux/signup/saga';
import signinSaga from '../redux/signin/saga';

function* rootSaga() {
  yield all([fork(signupSaga), fork(signinSaga)]);
}

export default rootSaga;
