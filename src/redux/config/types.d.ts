/**
 * CONFIG REDUCER ACTIONS TO BE DISPATCHED
 */
type ConfigActions =
  | { type: '@@CONFIG/SET_LOADING'; payload?: boolean }
  | {
      type: '@@CONFIG/SET_SPONSORS';
      payload: Record<string, string | number | boolean>;
    }
  | {
      type: '@@CONFIG/SET_TRANSMITIONS';
      payload: Record<string, string | number | boolean>;
    }
  | {
        type: '@@CONFIG/SET_PUBLICATIONS';
        payload: Record<string, string | number | boolean>;
    }
  | {
      type: '@@CONFIG/SET_CONFIG';
      payload: Record<string, string | number | boolean>;
    }
  | { type: '@@CONFIG/LOAD_FAILED'; error?: string };
/**
 * CONFIG REDUX STATE
 */
interface ConfigState {
  loading: boolean;
  enviromentUrl: string;
  sponsors: any[];
  transmitions?: any[];
  publications?: any[];
  publicationsSelected?: any;
}

type AsyncAction<R = void> = (
  args?: any,
  args1?: any,
) => ThunkAction<Promise<R>, ReduxState, ThunksArgs, SupportedActions>;