interface ProfileTeamInfo {
  photo: null | any;
  country: null | any;
  city: null | any;
  birthdate: string;
  email: string;
  _id: string;
  username: string;
  teams: ProfileTeams[];
  teamSelected?: ProfileTeams;
  statsCounter: StatsCounterProfileTeam[];
  sponsorSection: Array<SponsorSectionProfileTeam>;
  gameList?: Array<GameListProfile>;
}
interface GameListProfile {
  img: string;
  gameName: string;
  gameId: string;
  gameAccountId: string;
  username: string;
}

interface SponsorSectionProfileTeam {
  img: string;
  name: string;
  priority: number;
  url: string;
}

interface StatsCounterProfileTeam {
  id: number;
  nameStats: string;
  quantity: number;
}

interface ProfileTeams {
  _id: string;
  name: string;
  icon: string;
}

interface TeamProfile {
  _id: string;
  teamName?: string;
  name: string;
  platforms?: string[];
  numberPlayers?: number;
  image?: string;
  icon: string;
}
interface Games {
  _id: string;
  name: string;
  img: string;
  createdAt: string;
  updatedAt: number;
}

interface Team {
  plays: number,
  won: number,
  lost: number,
  players: array,
  _id: string,
  name: string,
  game: string,
  administrator: string,
  icon: string,
  slug: string,
  createdAt: string,
  updatedAt: string,
  maxPlayers: number

}

interface TeamSelectedProfile {
  _id: number;
  image: string;
  name: string;
  isAdmin: boolean;
  role: string;
}

interface PlayersFindByGame {
  phot: string;
  _id: string;
  username: string;
  email: string;
}
/**
 * USER REDUCER ACTIONS TO BE DISPATCHED
 */
type ProfileActions =
  | { type: '@@PROFILE/SET_LOADING'; payload?: boolean }
  | {
      type: '@@PROFILE/SET_TEAMS';
      payload: Array<TeamProfile>;
    }
  | {
      type: '@@PROFILE/SET_TEAM_PROFILE';
      payload: ProfileTeamInfo;
    }
  | {
      type: '@@PROFILE/SET_TEAM';
      payload: Team;
    }
  | {
      type: '@@PROFILE/SET_TEAM_SELECTED';
      payload: Array<TeamSelectedProfile>;
    }
  | {
      type: '@@PROFILE/CLEAR_TEAM_SELECTED';
    }
  | { type: '@@PROFILE/LOAD_FAILED'; error?: string }
  | {
      type: '@@PROFILE/GET_USER_TEAMS';
      payload: any;
    }
    | {
      type: '@@PROFILE/GET_USER_LEAGUES';
      payload: any;
    }
  | { type: '@@PROFILE/GET_GAMES'; payload: Array<Games> }
  | { type: '@@PROFILE/CLEAN_STORE' }
  | {
      type: '@@PROFILE/GET_FIND_PLAYERS';
      payload: Array<PlayersFindByGame>;
    }
  | {
      type: '@@LEAGUE/SET_LEAGUES_FIND_PLAYERS_BY_GAME';
      payload: any;
    };
/**
 * USER REDUX STATE
 */
interface ProfileConfigState {
  loading: boolean;
  profile?: ProfileTeamInfo;
  teams?: Array<TeamProfile>;
  teamSelected?: Array<TeamSelectedProfile>;
  userTeams?: any;
  games?: Array<Games>;
  playersFindGame?: any;
  myLeaguesSelected?: any;
  team?: Team;
}
