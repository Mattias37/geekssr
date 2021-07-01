interface Banner {
  _id: number;
  principal: boolean;
  image: Array<string>;
}

interface SectionFirst extends SectionTwo {
  autor: string;
}

interface NoticeDetail {
  _id: string;
  type: string;
  image: string;
  content: string;
  tittle: string;
}
interface SectionTwo {
  _id: number;
  image: string;
  type: string;
  title: string;
}

/**
 * NOTICE REDUCER ACTIONS TO BE DISPATCHED
 */
type NoticeActions =
  | { type: '@@NOTICE/SET_LOADING'; payload?: boolean }
  | {
      type: '@@NOTICE/SET_NOTICES';
      payload: Record<string, string | number | boolean>[];
    }
  | {
      type: '@@NOTICE/SET_NOTICES_SELECTED';
      payload: Record<string, string | number | boolean>;
    }
  | {
      type: '@@NOTICE/SET_NOTICES_SELECTED_CLEAR';
      payload?: string;
    }
  | { type: '@@NOTICE/LOAD_FAILED'; error?: string };
/**
 * NOTICE REDUX STATE
 */
interface NoticeState {
  loading: boolean;
  banner?: Array<Banner>;
  firstSection?: Array<SectionFirst>;
  twoSection?: Array<SectionTwo>;
  noticeSelected?: NoticeDetail;
}

type AsyncAction<R = void> = (
  args?: any,
  args1?: any,
) => ThunkAction<Promise<R>, ReduxState, ThunksArgs, SupportedActions>;