const setLeagueLoading = (isLoading?: boolean) => ({
  type: '@@LEAGUE/SET_LOADING',
  payload: isLoading,
});
const setLeagueLoadingSelected = (isLoading?: boolean) => ({
  type: '@@LEAGUE/SET_LOADING_SELECTED',
  payload: isLoading,
});

export const getLeagues: AsyncAction = () => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoading(true));
    try {
      const userProfile = await getState()?.user?.profile?._id ?? null;
      const { data } = await LeagueService.gridLeagues(userProfile);
      dispatch({
        type: '@@LEAGUE/SET_LEAGUES',
        payload: data.data,
        success: {
          id: 'loginUser',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
      });
    } finally {
      dispatch(setLeagueLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const getRegisterLeague: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoading(true));
    try {
      const { data } = await LeagueService.getRegisterLegue(id);
      // toast.success(data.message);
      dispatch({
        type: '@@LEAGUE/SET_REGISTERD',
        success: {
          id: 'loginUser',
          message: data.message,
        },
      });
    } catch (error) {
      /* toast.error(error.response.data.message, {
        autoClose: 5000
      }) */
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
      });
    } finally {
      dispatch(getLeagues());
      dispatch(getLeagueSelected(id))
      dispatch(setLeagueLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const getUnRegisterLeague: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoading(true));
    try {
      const { data } = await LeagueService.getUnRegisterLegue(id);
      // toast.success(data.message);
      dispatch({
        type: '@@LEAGUE/SET_UNREGISTERD',
        success: {
          id: 'loginUser',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
      });
    } finally {
      dispatch(getLeagues());
      dispatch(getLeagueSelected(id))
      dispatch(setLeagueLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const getLeagueParticipants1: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoading(true));
    try {
      const { data } = await LeagueService.getParticipants(id);
      dispatch({
        type: '@@LEAGUE/SET_PARTICIPANTS',
        payload: data.data,
        success: {
          id: 'loginUser',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
      });
    } finally {
      dispatch(setLeagueLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const getLeagueParticipants: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoadingSelected(true));
    try {
      const { data } = await LeagueService.getParticipants(id);
      dispatch({
        type: '@@LEAGUE/SET_PARTICIPANTS',
        payload: data.data,
        success: {
          id: 'loginUser',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
      });
    } finally {
      dispatch(setLeagueLoadingSelected(false));
      // SplashScreen.hide();
    }
  };
};
export const getPhases: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoadingSelected(true));
    try {
      const { data } = await LeagueService.getPhases(id);
      dispatch({
        type: '@@LEAGUE/SET_PHASES',
        payload: data.data,
        success: {
          id: 'loginUser',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
      });
    } finally {
      dispatch(setLeagueLoadingSelected(false));
      // SplashScreen.hide();
    }
  };
};
export const getLeagueSelected: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoading(true));
    try {
      const userProfile = await getState()?.user?.profile?._id ?? null;
      console.log(userProfile);
      const { data } = await LeagueService.getLeagueById(id, userProfile);

      if (data.code === 400) {
        throw data.message;
      }
      console.log(data.data);
      dispatch({
        type: '@@LEAGUE/SET_LEAGUES_SELECTED',
        payload: data.data,
        success: {
          id: 'registerUser',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
        error: {
          id: 'registerUserError',
          message: error,
          close: 1000,
        },
      });
    } finally {
      dispatch(setLeagueLoading(false));
    }
  };
};
export const getLeagueSelectedTransmition: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoadingSelected(true));
    try {
      const { data } = await LeagueService.getLeagueTransmitions(id);
      if (data.code === 400) {
        throw data.message;
      }
      console.log('leagueTransmissiones', data);
      dispatch({
        type: '@@LEAGUE/SET_LEAGUES_SELECTED_TRANSMITIONS',
        payload: data.data,
        success: {
          id: 'registerUser',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
        error: {
          id: 'registerUserError',
          message: error,
          close: 1000,
        },
      });
    } finally {
      dispatch(setLeagueLoadingSelected(false));
    }
  };
};
export const getLeagueSelectedTeams: AsyncAction = (
  idLeague: string,
  idTeam: string,
) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoadingSelected(true));
    try {
      const { data } = await LeagueService.getLeagueTeamSelected(
        idLeague,
        idTeam,
      );

      if (data.code === 400) {
        throw data.message;
      }

      dispatch({
        type: '@@LEAGUE/SET_LEAGUES_SELECTED_TEAMS',
        payload: data.data,
        success: {
          id: 'leagueSelectedTeams',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
        error: {
          id: 'leagueSelectedTeamsError',
          message: error,
          close: 1000,
        },
      });
    } finally {
      dispatch(setLeagueLoadingSelected(false));
    }
  };
};

export const addTeamLeague: AsyncAction = (idLeague, body: any) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoading(true));
    console.log('idLeague', idLeague);
    console.log('body', body);
    try {
      const data = await LeagueService.addTeamToLeague(idLeague, body);
      console.log('data de ejecutar la funcion addTeamToLeague', data);
      dispatch({
        type: '@@LEAGUE/SET_LEAGUES_ADD_TEAM',
        success: {
          id: 'leagueSelectedTeams',
          message: data.data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
        error: {
          id: 'addTeamError',
          message: error,
          close: 1000,
        },
      });
    } finally {
      dispatch(setLeagueLoading(false));
    }
  };
};

export const getLeagueSelectedPositions: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoadingSelected(true));
    try {
      const { data } = await LeagueService.getLeaguePositions(id);

      if (data.code === 400) {
        throw data.message;
      }

      dispatch({
        type: '@@LEAGUE/SET_LEAGUES_SELECTED_POSITIONS',
        payload: data.data,
        success: {
          id: 'leagueSelectedPosition',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
        error: {
          id: 'leagueSelectedPositionError',
          message: error,
          close: 1000,
        },
      });
    } finally {
      dispatch(setLeagueLoadingSelected(false));
    }
  };
};
export const getLeagueSelectedCalendar: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoadingSelected(true));
    try {
      const { data } = await LeagueService.getLeagueCalendar(id);

      if (data.code === 400) {
        throw data.message;
      }

      dispatch({
        type: '@@LEAGUE/SET_LEAGUES_SELECTED_CALENDAR',
        payload: data.data,
        success: {
          id: 'leagueSelectedCalendar',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
        error: {
          id: 'leagueSelectedCalendarError',
          message: error,
          close: 1000,
        },
      });
    } finally {
      dispatch(setLeagueLoadingSelected(false));
    }
  };
};
export const getLeagueSelectedFinals: AsyncAction = (id: string) => {
  return async (dispatch, getState, { LeagueService }) => {
    dispatch(setLeagueLoadingSelected(true));
    try {
      const { data } = await LeagueService.getLeagueFinals(id);

      if (data.code === 400) {
        throw data.message;
      }

      dispatch({
        type: '@@LEAGUE/SET_LEAGUES_SELECTED_FINALS',
        payload: data.data,
        success: {
          id: 'leagueSelectedCalendar',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@LEAGUE/LOAD_FAILED',
        error: {
          id: 'leagueSelectedCalendarError',
          message: error,
          close: 1000,
        },
      });
    } finally {
      dispatch(setLeagueLoadingSelected(false));
    }
  };
};

export const clearLeagueSelected = (id?: string) => {
  return {
    type: '@@LEAGUE/SET_LEAGUES_SELECTED_CLEAR',
    payload: id,
  };
};
export const clearLeagueTeamSelected = (id?: string) => {
  return {
    type: '@@LEAGUE/SET_LEAGUES_TEAM_SELECTED_CLEAR',
    payload: id,
  };
};
