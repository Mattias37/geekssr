/**
 * USER REDUCER ACTIONS TO BE DISPATCHED
 */
type UserActions =
  | { type: '@@USER/SET_LOADING'; payload?: boolean }
  | {
      type: '@@USER/SET_USER';
      payload: Record<string, string | number | boolean>;
    }
  | {
      type: '@@USER/CLEAR_USER';
    }
  | {
      type: '@@USER/SET_TOKEN';
      payload: string;
    }
  | { type: '@@CONFIG/LOAD_FAILED'; error?: string };
/**
 * USER REDUX STATE
 */
interface UserState {
  loading: boolean;
  profile?: Record<string, any>;
  auth?: boolean;
  token?: string;
  error?: Record<string, any>;
}
