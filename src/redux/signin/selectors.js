import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignin = state => state.signin || initialState;

const makeSelectId = () => createSelector(selectSignin, signinState => signinState.id);
const makeSelectPassword = () => createSelector(selectSignin, signinState => signinState.password);
const makeSelectLoading = () => createSelector(selectSignin, signinState => signinState.loading);
const makeSelectError = () => createSelector(selectSignin, signinState => signinState.error);
const makeSelectResult = () => createSelector(selectSignin, signinState => signinState.result);

export {
  makeSelectId,
  makeSelectPassword,
  makeSelectLoading,
  makeSelectError,
  makeSelectResult,
};
