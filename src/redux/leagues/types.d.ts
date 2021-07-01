/**
 * LEAGUE REDUCER ACTIONS TO BE DISPATCHED
 */
 type LEAGUEActions =
 | { type: '@@LEAGUE/SET_LOADING'; payload?: boolean }
 | { type: '@@LEAGUE/SET_LOADING_SELECTED'; payload?: boolean }
 | {
     type: '@@LEAGUE/SET_LEAGUES';
     payload: Record<string, string | number | boolean>[];
   }
 | {
    type: '@@LEAGUE/SET_PARTICIPANTS';
       payload: Record<string, string | number | boolean>[];
   }
 | {
     type: '@@LEAGUE/SET_LEAGUES_SELECTED';
     payload: Record<string, string | number | boolean>;
   }
 | {
     type: '@@LEAGUE/SET_LEAGUES_SELECTED_TRANSMITIONS';
     payload: Record<string, string | number | boolean>;
   }
 | {
     type: '@@LEAGUE/SET_LEAGUES_SELECTED_POSITIONS';
     payload: Record<string, string | number | boolean>;
   }
 | {
     type: '@@LEAGUE/SET_LEAGUES_SELECTED_TEAMS';
     payload: Record<string, string | number | boolean>;
   }
 | {
     type: '@@LEAGUE/SET_LEAGUES_SELECTED_FINALS';
     payload: Record<string, string | number | boolean>[];
   }
 | {
     type: '@@LEAGUE/SET_LEAGUES_SELECTED_CALENDAR';
     payload: Record<string, string | number | boolean>;
   }
 | {
     type: '@@LEAGUE/SET_LEAGUES_SELECTED_CLEAR';
     payload?: string;
   }
 | {
     type: '@@LEAGUE/SET_LEAGUES_TEAM_SELECTED_CLEAR';
   }
 | { type: '@@LEAGUE/LOAD_FAILED'; error?: string };
/**
* LEAGUE REDUX STATE @@LEAGUE/SET_PARTICIPANTS
*/
interface LeagueState {
 loading: boolean;
 loadingSelected: boolean;
 allLeague?: any[];
 leagueSelected?: Record<string, any>;
 teamSelected?: Record<string, any>;
 positionsSelected?: Record<string, any>;
 calendarSelected?: Record<string, any>;
 transmitionsSelected?: Transmissions[];
 leagueFinalsSelected?: Record<string, any>[];
 allPhasesSelected?: any[];
 participantesSelected?: any[];
}
interface Transmissions {
  _id:  string; 
  title:  string;
  image:   string;
  author:  any;
  description:   string;
  endDate:string;
  startDate:string;
  url:string;
  status: string;
  iframeTransmission?: string;
}

type AsyncAction<R = void> = (
  args?: any,
  args1?: any,
) => ThunkAction<Promise<R>, ReduxState, ThunksArgs, SupportedActions>;