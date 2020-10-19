import { call, select, put, takeLatest } from 'redux-saga/effects';
import { GET_BOARD_LIST } from './constants';
import { getBoardListSuccessAction, getBoardListErrorAction } from './actions';
import { makeSelectBeginIndex, makeSelectSize } from './selectors';
import { getBoardListRequest } from './requests';

function* getBoardList() {
  const beginIndex = yield select(makeSelectBeginIndex());
  const size = yield select(makeSelectSize());
  try {
    const res = yield call(getBoardListRequest, beginIndex, size);
    yield put(getBoardListSuccessAction(res.data));
  } catch (error) {
    yield put(getBoardListErrorAction(error));
  }
}

function* freeBoardSaga() {
  yield takeLatest(GET_BOARD_LIST, getBoardList);
}

export default freeBoardSaga;
