import produce from 'immer';
import { SET_ID, SET_PASSWORD, SEND_FORM, SEND_FORM_SUCCESS, SEND_FORM_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  id: '',
  password: '',
  result: {},
};

const signinReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ID:
        draft.id = action.id;
        break;
      case SET_PASSWORD:
        draft.password = action.password;
        break;
      case SEND_FORM:
        draft.loading = true;
        break;
      case SEND_FORM_SUCCESS:
        draft.result = action.response;
        draft.loading = false;
        break;
      case SEND_FORM_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default signinReducer;
