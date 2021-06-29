const setProfileLoading = (isLoading?: boolean) => ({
  type: '@@PROFILE/SET_LOADING',
  payload: isLoading,
});

export const getTeams: AsyncAction = () => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const { data } = await ProfileService.teams();
      console.log('teams',data)
      dispatch({
        type: '@@PROFILE/SET_TEAMS',
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};

export const getTeam: AsyncAction = (id: string) => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const { data } = await ProfileService.team(id);
      console.log('teams',data)
      dispatch({
        type: '@@PROFILE/SET_TEAM',
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};

export const getGames: AsyncAction = () => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const { data } = await ProfileService.games();
      dispatch({
        type: '@@PROFILE/GET_GAMES',
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};
export const getTeamProfile: AsyncAction = () => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const { data: dataProfile } = await ProfileService.profile();
      const { data: dataGameList } = await ProfileService.gameList();
      const { data } = dataProfile;
      if (!!dataGameList.data && dataGameList.data.length > 0) {
        data.gameList = dataGameList.data;
      }
      dispatch({
        type: '@@PROFILE/SET_TEAM_PROFILE',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};
export const selectTeamService: AsyncAction = (id: string) => {
  return async (dispatch, getState, { ProfileService }) => {
    try {
      await ProfileService.putSelectedTeam(id);
      await dispatch(getTeamProfile());
    } catch (error) {
      console.log(error);
    }
  };
};
export const createAccountGame: AsyncAction = (values: any) => {
  return async (dispatch, _getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      await ProfileService.gameListCreateProfile(values);
      await dispatch(getTeamProfile());
      dispatch({
        type: '@@PROFILE/SHOW_MESSAGE',
        success: {
          id: 'profileCreatedAccountGame',
          message: 'Cuenta creada con exito',
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: '@@PROFILE/SHOW_MESSAGE',
        error: {
          id: 'profileAccountGameError',
          message: error.message || 'Error al crear cuenta de juego',
        },
      });
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};
export const updateAccountGame: AsyncAction = (id: string, values: any) => {
  return async (dispatch, _getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      await ProfileService.gameListUpdateProfile(id, values);
      const { data: dataGameList } = await ProfileService.gameList();
      const data: any = {};
      if (!!dataGameList.data) {
        data.gameList = dataGameList.data;
      }
      dispatch({
        type: '@@PROFILE/SET_TEAM_PROFILE',
        payload: data,
        success: {
          id: 'profileUpdateAccountGame',
          message: data.message || 'Cuenta Actualizada con exito',
        },
      });
    } catch (error) {
      dispatch({
        type: '@@PROFILE/SHOW_MESSAGE',
        error: {
          id: 'profileAccountGameError',
          message: error.message || 'Error al actualizar',
        },
      });
      console.log(error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};
export const deleteAccountGame: AsyncAction = (gameAccountId: string) => {
  return async (dispatch, _getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      await ProfileService.gameListDeleteProfile(gameAccountId);
      const { data: dataGameList } = await ProfileService.gameList();
      const data: any = {};
      if (!!dataGameList.data) {
        data.gameList = dataGameList.data;
      }
      dispatch({
        type: '@@PROFILE/SET_TEAM_PROFILE',
        payload: data,
        success: {
          id: 'profileDeleteAccountGame',
          message: data.message || 'Cuenta Eliminada con exito',
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: '@@PROFILE/SHOW_MESSAGE',
        error: {
          id: 'profileAccountGameError',
          message: error.message || 'Error al eliminar',
        },
      });
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};
export const getTeamSelected: AsyncAction = (id: string) => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const { data } = await ProfileService.memberTeams(id);
      console.log('data de selecte temds', data);
      dispatch({
        type: '@@PROFILE/SET_TEAM_SELECTED',
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};

export const getTeamsList: AsyncAction = () => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const { data } = await ProfileService.userTeams();
      dispatch({
        type: '@@PROFILE/GET_USER_TEAMS',
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};
export const getMyLeaguesList: AsyncAction = () => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const { data } = await ProfileService.myLeagues();
      dispatch({
        type: '@@PROFILE/GET_USER_LEAGUES',
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};

export const suggestPlayersByTeam: AsyncAction = (
  idTeam: string,
  identifier: string,
) => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const data = await ProfileService.suggestPlayersByTeamId(
        idTeam,
        identifier,
      );
      dispatch({
        type: '@@PROFILE/GET_FIND_PLAYERS',
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};

export const createNewTeam: AsyncAction = (body: any) => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const { data } = await ProfileService.createTeam(body);
      dispatch({
        type: '@PROFILE/CREATE_TEAM',
        success: {
          id: 'profileCreateTeam',
          message: data.message,
        },
      });
      await dispatch(getTeamProfile());
    } catch (error) {
      console.log(error);
      dispatch({
        type: '@@PROFILE/LOAD_FAILED',
        error: {
          id: 'createTeamError',
          message: 'Error al crear el equipo',
          close: 1000,
        },
      });
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};

export const addMembersTeam: AsyncAction = (teamId: string, list: any) => {
  return async (dispatch, getState, { ProfileService }) => {
    dispatch(setProfileLoading(true));
    try {
      const { data } = await ProfileService.addMemberTeam(teamId, list);
      dispatch({
        type: '@PROFILE/ADD_MEMBERS-TEAM',
        success: {
          id: 'profileAddMembersTeam',
          message: data.message,
        },
      });
      await dispatch(getTeamProfile());
      await dispatch(getTeamSelected(teamId));
    } catch (error) {
      console.log(error);
      dispatch({
        type: '@@PROFILE/LOAD_FAILED',
        error: {
          id: 'profileAddMembersTeamError',
          message: error,
          close: 1000,
        },
      });
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};


export const cleanProfileStore = () => ({
  type: '@PROFILE/CLEAN_STORE',
});
