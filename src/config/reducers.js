import { combineReducers } from 'redux';
import signupReducer from '../redux/signup/reducer';
import signinReducer from '../redux/signin/reducer';

export default combineReducers({
  signup: signupReducer,
  signin: signinReducer,
});
