import produce from 'immer';
import {
  SEND_FORM,
  SEND_FORM_SUCCESS,
  SEND_FORM_ERROR,
  SET_ID,
  CHECK_ID,
  CHECK_ID_SUCCESS,
  CHECK_ID_ERROR,
  SET_PASSWORD,
  SET_NAME,
  CHECK_NAME,
  CHECK_NAME_SUCCESS,
  CHECK_NAME_ERROR,
  SET_EMAIL,
} from './constants';

export const initialState = {
  formData: {},
  loading: false,
  error: false,
  id: '',
  password: '',
  name: '',
  email: '',
  availableId: false,
  availableName: false,
  result: false,
};

const signupReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEND_FORM:
        draft.loading = true;
        draft.formData = action.formData;
        break;
      case SEND_FORM_SUCCESS:
        draft.result = action.result;
        draft.loading = false;
        break;
      case SEND_FORM_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case SET_ID:
        draft.id = action.id;
        break;
      case CHECK_ID:
        break;
      case CHECK_ID_SUCCESS:
        draft.availableId = action.response;
        break;
      case CHECK_ID_ERROR:
        draft.error = action.error;
        break;
      case SET_PASSWORD:
        draft.password = action.password;
        break;
      case SET_NAME:
        draft.name = action.name;
        break;
      case CHECK_NAME:
        break;
      case CHECK_NAME_SUCCESS:
        draft.availableName = action.response;
        break;
      case CHECK_NAME_ERROR:
        draft.error = action.error;
        break;
      case SET_EMAIL:
        draft.email = action.email;
        break;
    }
  });

export default signupReducer;
