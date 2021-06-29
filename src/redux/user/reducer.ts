const userInitialState = {
  loading: false,
}

export default function reducer(state = userInitialState, action) {
  switch (action.type) {
    case '@@USER/SET_LOADING': {
      return {
        ...state,
        loading: !!action.payload,
      };
    }

    case '@@USER/SET_TOKEN': {
      return {
        ...state,
        token: action.payload,
        auth: !!action.payload,
      };
    }
    case '@@USER/SET_USER': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case '@@USER/SET_USER_ERROR': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case '@@USER/CLEAR_USER': {
      return userInitialState;
    }
    default: {
      return state;
    }
  }
}
