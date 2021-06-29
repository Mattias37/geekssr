
import { combineReducers } from "redux";
//import { connectRouter } from 'connected-react-router';
import config from './config/reducer'
import layout from './layout/reducer';
import user from './user/reducer';
import profile from './profile/reducer';
import league from './leagues/reducer';
//import { courseReducer } from './course'
//import { tournamentESportReducer } from './tournament-esport';
//import { noticeReducer } from './notices';
//import { shopReducer } from './shop';
const combinedReducer = combineReducers({
  config,
  layout,
  user,
  profile,
  league
    //course: courseReducer,
    //shop: shopReducer,
    //tournamenESport: tournamentESportReducer,
    //notice: noticeReducer,
    //router: connectRouter(history as any),
})
export default combinedReducer;