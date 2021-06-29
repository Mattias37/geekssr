import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.profile;
};

export const getPorfileConfigLoading = compose((profileConfigState) => {
  return profileConfigState.loading;
}, rootState);

export const getTeamsProfileConfig = compose((profileConfigState) => {
  return profileConfigState.teams;
}, rootState);

export const getTeamSelectedProfileConfig = compose((profileConfigState) => {
  return profileConfigState.team;
}, rootState);

export const getTeamProfileConfigInfo = compose((profileConfigState) => {
  return profileConfigState.profile;
}, rootState);
export const getTeamsSelectedProfileConfig = compose((profileConfigState) => {
  return profileConfigState.teamSelected;
}, rootState);
export const getUserTeams = compose((profileConfigState) => {
  return profileConfigState.userTeams;
}, rootState);

export const getAllGames = compose((profileConfigState) => {
  return profileConfigState.games;
}, rootState);
export const getAllMyLeagues = compose((profileConfigState) => {
  return profileConfigState.myLeaguesSelected;
}, rootState);
export const findGamePlayers = compose((profileConfigState) => {
  return profileConfigState.playersFindGame;
}, rootState);
export const ProfileSponsorSeccion = compose((profileConfigState) => {
  return profileConfigState?.sponsorSection;
}, getTeamProfileConfigInfo);
