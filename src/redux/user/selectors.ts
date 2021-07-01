import { compose } from 'redux';

const rootState = (state: any) => {
  return state.user;
};

export const getUserLoading = compose((userState) => {
  return userState.loading;
}, rootState);

export const getToken = compose((userState) => {
  return userState.token;
}, rootState);
export const getAuth = compose((userState) => {
  return userState.auth;
}, rootState);
export const getProfile = compose((userState) => {
  return userState.profile;
}, rootState);
export const getErrors = compose((userState) => {
  return userState.error;
}, rootState);