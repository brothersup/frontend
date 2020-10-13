import { combineReducers } from 'redux';
import signupReducer from '../redux/signup/reducer';

export default combineReducers({
  signup: signupReducer,
});
