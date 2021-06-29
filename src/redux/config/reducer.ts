const configInitialState = {
  loading: true,
  enviromentUrl: '',
  sponsors: [],
}

export default function reducer(state = configInitialState, action) {
  switch (action.type) {
    case '@@CONFIG/SET_LOADING': {
      return {
        ...state,
        loading: !!action.payload,
      };
    }

    case '@@CONFIG/SET_CONFIG': {
      return {
        ...state,
        ...action.payload,
      };
    }

    case '@@CONFIG/SET_SPONSORS': {
      return {
        ...state,
        sponsors: action.payload,
      };
    }
    case '@@CONFIG/SET_TRANSMITIONS': {
      return {
        ...state,
        transmitions: action.payload,
      };
    } 
    case '@@CONFIG/SET_PUBLICATIONS': {
      return {
        ...state,
        publications: action.payload,
      };
    }
    case '@@CONFIG/SET_PUBLICATIONS_SELECTED':{
      return {
        ...state,
        publicationsSelected: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}