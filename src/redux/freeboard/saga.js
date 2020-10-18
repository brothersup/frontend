import { call, select, put, takeLatest } from 'redux-saga/effects';
import { GET_BOARD_LIST } from './constants';
import { getBoardListSuccessAction, getBoardListErrorAction } from './actions';
import { makeSelectBeginIndex, makeSelectSize } from './selectors';

function* getBoardList() {
  const beginIndex = yield select(makeSelectBeginIndex());
  const size = yield select(makeSelectSize());

  const res = {
    data: {
      list: [
        { no: 1, title: 'title1', content: 'content1', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
        { no: 2, title: 'title2', content: 'content2', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
        { no: 3, title: 'title3', content: 'content3', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
        { no: 4, title: 'title4', content: 'content4', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
        { no: 5, title: 'title5', content: 'content5', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
        { no: 6, title: 'title6', content: 'content6', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
        { no: 7, title: 'title7', content: 'content7', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
        { no: 8, title: 'title8', content: 'content8', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
        { no: 9, title: 'title9', content: 'content9', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
        { no: 10, title: 'title10', content: 'content10', author: 'admin', regDate: '2020-01-01', modDate: '2020-01-01', hit: 0 },
      ],
      total: 13,
    },
  };

  try {
    yield put(getBoardListSuccessAction(res.data));
  } catch (error) {
    yield put(getBoardListErrorAction(error));
  }
}

function* freeBoardSaga() {
  yield takeLatest(GET_BOARD_LIST, getBoardList);
}

export default freeBoardSaga;
