import produce from 'immer';
import { GET_BOARD_LIST, GET_BOARD_LIST_SUCCESS, GET_BOARD_LIST_ERROR, LOAD_NEXT_PAGE, RESET_BOARD } from './constants';

export const initialState = {
  loading: false,
  error: false,
  beginIndex: 0,
  size: 10,
  boardList: Array.from([]),
  total: 0,
};

const freeBoardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_BOARD_LIST:
        draft.loading = true;
        break;
      case GET_BOARD_LIST_SUCCESS:
        draft.loading = false;
        draft.boardList = draft.boardList.concat(Array.from(action.response.list));
        draft.total = action.response.total;
        break;
      case GET_BOARD_LIST_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case LOAD_NEXT_PAGE:
        draft.beginIndex += draft.size;
        break;
      case RESET_BOARD:
        draft.boardList = Array.from([]);
        draft.beginIndex = 0;
        draft.total = 0;
        break;
    }
  });

export default freeBoardReducer;
