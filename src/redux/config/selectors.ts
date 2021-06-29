import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.config;
};
export const getConfig = compose((configState) => {
  return configState;
}, rootState);
export const getConfigLoading = compose((configState) => {
  return configState.loading;
}, rootState);

export const getEnviromentUrl = compose((configState) => {
  return configState.enviromentUrl;
}, rootState);

export const getSponsorsSelector = compose((configState) => {
  return configState.sponsors;
}, rootState);

export const getTransmitionSelector = compose((configState) => {
  return configState.transmitions;
}, rootState);

export const getPublicationsSelector = compose((configState) => {
  return configState.publications;
}, rootState);

export const getPublicationsSelectedSelector = compose((configState) => {
  return configState.publicationsSelected;
}, rootState);