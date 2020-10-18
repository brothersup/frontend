import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFreeBoard = state => state.freeBoard || initialState;

const makeSelectLoading = () => createSelector(selectFreeBoard, freeBoardState => freeBoardState.loading);
const makeSelectError = () => createSelector(selectFreeBoard, freeBoardState => freeBoardState.error);
const makeSelectBeginIndex = () => createSelector(selectFreeBoard, freeBoardState => freeBoardState.beginIndex);
const makeSelectSize = () => createSelector(selectFreeBoard, freeBoardState => freeBoardState.size);
const makeSelectBoardList = () => createSelector(selectFreeBoard, freeBoardState => freeBoardState.boardList);
const makeSelectTotal = () => createSelector(selectFreeBoard, freeBoardState => freeBoardState.total);

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectBeginIndex,
  makeSelectSize,
  makeSelectBoardList,
  makeSelectTotal,
};
