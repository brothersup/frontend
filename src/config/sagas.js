import { all, fork } from 'redux-saga/effects';
import signupSaga from '../redux/signup/saga';
import signinSaga from '../redux/signin/saga';
import freeBoardSage from '../redux/freeboard/saga';

function* rootSaga() {
  yield all([fork(signupSaga), fork(signinSaga), fork(freeBoardSage)]);
}

export default rootSaga;
