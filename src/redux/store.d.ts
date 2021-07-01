import { ThunkAction } from 'redux-thunk';
import { apiClient } from '../services';

/**
 * REDUX AVAILABLE ACTIONS TO BE DISPATCHED
 */

/**
 * REDUX STATE INTERFACES
 */

type ThunksArgs = typeof apiClient;
interface ActionWithoutPayload<T extends string> {
  type: T;
  error?: string;
}

interface ActionWithPayload<T extends string, P> {
  type: T;
  payload: P;
  error?: string;
}
declare global {
  /**
   * REDUX REDUCERS STATES
   */

  interface ReduxState { 
    config: ConfigState;
    // course: CourseState;
    profile: ProfileConfigState;
    // shop: ShopState;
    leagues: LeagueState;
    user: UserState;
    layout: LayoutState;
    news: NoticeState; 
    // tournamenESport: TournamentESportState;
  }

  type baseAction = ActionWithoutPayload<any> & ActionWithPayload<any, any>;

  type SupportedActions =
    | ConfigActions
    | UserActions
    | ProfileActionType
    | ProfileActions
    | any;

}
