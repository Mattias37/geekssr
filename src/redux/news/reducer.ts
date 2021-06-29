const newsInitialState = {
  loading: false,
}

export default function reducer(state = newsInitialState, action) {
  switch (action.type) {
    case '@@NOTICE/SET_LOADING': {
      return {
        ...state,
        loading: !!action.payload,
      };
    }
    case '@@NOTICE/LOAD_FAILED': {
      return {
        ...state,
        loading: !!action.payload,
      };
    }
    case '@@NOTICE/SET_NOTICES': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case '@@NOTICE/SET_NOTICES_SELECTED_CLEAR': {
      if (action.payload) {
        return {
          ...state,
          noticeSelected: undefined,
        };
      }
      return state;
    }
    case '@@NOTICE/SET_NOTICES_SELECTED': {
      return {
        ...state,
        noticeSelected: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}