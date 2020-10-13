import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignup = state => state.signup || initialState;

const makeSelectFormData = () => createSelector(selectSignup, signupState => signupState.formData);
const makeSelectLoading = () => createSelector(selectSignup, signupState => signupState.loading);
const makeSelectError = () => createSelector(selectSignup, signupState => signupState.error);
const makeSelectId = () => createSelector(selectSignup, signupState => signupState.id);
const makeSelectPassword = () => createSelector(selectSignup, signupState => signupState.password);
const makeSelectName = () => createSelector(selectSignup, signupState => signupState.name);
const makeSelectEmail = () => createSelector(selectSignup, signupState => signupState.email);
const makeSelectAvailableId = () => createSelector(selectSignup, signupState => signupState.availableId);
const makeSelectAvailableName = () => createSelector(selectSignup, signupState => signupState.availableName);

export {
  makeSelectFormData,
  makeSelectLoading,
  makeSelectError,
  makeSelectId,
  makeSelectPassword,
  makeSelectName,
  makeSelectEmail,
  makeSelectAvailableId,
  makeSelectAvailableName,
};
