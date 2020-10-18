import { GET_BOARD_LIST, GET_BOARD_LIST_SUCCESS, GET_BOARD_LIST_ERROR, LOAD_NEXT_PAGE, RESET_BOARD } from './constants';

export const getBoardListAction = () => ({
  type: GET_BOARD_LIST,
});

export const getBoardListSuccessAction = response => ({
  type: GET_BOARD_LIST_SUCCESS,
  response,
});

export const getBoardListErrorAction = error => ({
  type: GET_BOARD_LIST_ERROR,
  error,
});

export const loadNextPageAction = () => ({
  type: LOAD_NEXT_PAGE,
});

export const resetBoardAction = () => ({
  type: RESET_BOARD,
});
