import { combineReducers } from 'redux';
import signupReducer from '../redux/signup/reducer';
import signinReducer from '../redux/signin/reducer';
import freeBoardReducer from '../redux/freeboard/reducer';

export default combineReducers({
  signup: signupReducer,
  signin: signinReducer,
  freeBoard: freeBoardReducer,
});
