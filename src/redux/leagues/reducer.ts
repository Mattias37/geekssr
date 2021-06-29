const leagueInitialState = {
  loading: false,
  loadingSelected: false,
}

export default function reducer(state = leagueInitialState, action) {
  switch (action.type) {
    case '@@LEAGUE/SET_LOADING': {
      return {
        ...state,
        loading: !!action.payload,
        loadingSelected: !!action.payload,
      };
    }
    case '@@LEAGUE/SET_LOADING_SELECTED': {
      return {
        ...state,
        loadingSelected: !!action.payload,
      };
    }
    case '@@LEAGUE/LOAD_FAILED': {
      return {
        ...state,
        loading: !!action.payload,
        loadingSelected: !!action.payload,
      };
    }
    case '@@LEAGUE/SET_LEAGUES': {
      return {
        ...state,
        allLeague: action.payload,
      };
    }
    case '@@LEAGUE/SET_LEAGUES_SELECTED_CLEAR': {
      if (action.payload) {
        return {
          ...state,
          [action.payload]: undefined,
        };
      }
      return initState;
    }
    case '@@LEAGUE/SET_LEAGUES_SELECTED': {
      return {
        ...state,
        leagueSelected: action.payload,
      };
    }
    case '@@LEAGUE/SET_LEAGUES_SELECTED_POSITIONS': {
      return {
        ...state,
        positionsSelected: action.payload,
      };
    }
    case '@@LEAGUE/SET_LEAGUES_SELECTED_TRANSMITIONS': {
      return {
        ...state,
        transmitionsSelected: action.payload,
      };
    }
    case '@@LEAGUE/SET_LEAGUES_SELECTED_CALENDAR': {
      return {
        ...state,
        calendarSelected: action.payload,
      };
    }
    case '@@LEAGUE/SET_PARTICIPANTS': {
      return {
        ...state,
        participantesSelected: action.payload,
      };
    }
    case '@@LEAGUE/SET_LEAGUES_SELECTED_FINALS': {
      return {
        ...state,
        leagueFinalsSelected: action.payload,
      };
    }
    case '@@LEAGUE/SET_LEAGUES_SELECTED_TEAMS': {
      return {
        ...state,
        teamSelected: action.payload,
      };
    }
    case '@@LEAGUE/SET_LEAGUES_TEAM_SELECTED_CLEAR': {
      return {
        ...state,
        teamSelected: undefined,
      };
    }
    case '@@LEAGUE/SET_PHASES': {
      return {
        ...state,
        allPhasesSelected: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}