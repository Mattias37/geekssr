import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.league;
};
export const getLeagueLoading = compose((leagueState) => {
  return leagueState.loading;
}, rootState);
export const getAllLeague = compose((leagueState) => {
  return leagueState.allLeague;
}, rootState);
export const getLeagueSelectedSelector = compose((leagueState) => {
  return leagueState.leagueSelected;
}, rootState);
export const getLeagueSelectedLoadingSelector = compose((leagueState) => {
  return leagueState.loadingSelected;
}, rootState);
export const getLeagueSelectedPositionsSelector = compose((leagueState) => {
  return leagueState.positionsSelected;
}, rootState);
export const getLeagueSelectedTransmitionsSelector = compose((leagueState) => {
  return leagueState.transmitionsSelected;
}, rootState);
export const getLeagueSelectedCalendarSelector = compose((leagueState) => {
  return leagueState.calendarSelected;
}, rootState);
export const getLeagueSelectedTeamSelector = compose((leagueState) => {
  return leagueState.teamSelected;
}, rootState);
export const getLeagueSelectedFinalsSelector = compose((leagueState) => {
  return leagueState.leagueFinalsSelected;
}, rootState);
export const getAllPhasesSelector = compose((leagueState) => {
  return leagueState.allPhasesSelected;
}, rootState);
export const getAllParticipantsSelector = compose((leagueState) => {
  return leagueState.participantesSelected;
}, rootState);