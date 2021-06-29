const userInitialState = {
  loading: false,
}

export default function reducer(state = userInitialState, action) {
  switch (action.type) {
    case '@@PROFILE/SET_LOADING': {
      return {
        ...state,
        loading: !!action.payload,
      };
    }
    case '@@PROFILE/CLEAN_STORE': {
      return initState;
    }
    case '@@PROFILE/SET_TEAMS': {
      return {
        ...state,
        teams: action.payload,
      };
    }
    case '@@PROFILE/SET_TEAM': {
      return {
        ...state,
        team: action.payload,
      };
    }
    case '@@PROFILE/SET_TEAM_SELECTED': {
      return {
        ...state,
        teamSelected: action.payload,
      };
    }
    case '@@PROFILE/GET_USER_LEAGUES': {
      return {
        ...state,
        myLeaguesSelected: action.payload,
      };
    }
    case '@@PROFILE/SET_TEAM_PROFILE': {
      let newProfile: any = {};
      if (state.profile) {
        newProfile = { ...state.profile, ...action.payload };
      }
      newProfile = { ...newProfile, ...action.payload };
      return {
        ...state,
        profile: newProfile,
      };
    }
    case '@@PROFILE/CLEAR_TEAM_SELECTED': {
      return {
        ...state,
        teamSelected: undefined,
      };
    }
    case '@@PROFILE/GET_USER_TEAMS': {
      return {
        ...state,
        userTeams: action.payload,
      };
    }
    case '@@PROFILE/GET_GAMES': {
      return {
        ...state,
        games: action.payload,
      };
    }
    case '@@PROFILE/GET_FIND_PLAYERS': {
      return {
        ...state,
        playersFindGame: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
