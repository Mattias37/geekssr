const layoutInitialState = {
    drawerSidebar: false,
    cartSidebar: false,
    appBar: false,
    showDisabledProduct: false,
    search: '',
    exitBr: true,
    loading: false,
    infoModalShow: {
      show: false,
      message: ''
    }
  }
  
  export default function reducer(state = layoutInitialState, action) {
    switch (action.type) {
        case '@@LAYOUT/DRAWER_SIDEBAR': {
          return {
            ...state,
            drawerSidebar: action.payload,
          };
        }
        case '@@LAYOUT/CART_SIDEBAR': {
          return {
            ...state,
            cartSidebar: action.payload,
          };
        }
        case '@@LAYOUT/APP_BAR': {
          return {
            ...state,
            appBar: action.payload,
          };
        }
        case '@@LAYOUT/EXIT_BR': {
          return {
            ...state,
            exitBr: action.payload,
          };
        }
        case '@@LAYOUT/SEARCH': {
          return {
            ...state,
            search: action.payload,
          };
        }
        case '@@LAYOUT/DISABLED_PRODUCT': {
          return {
            ...state,
            showDisabledProduct: action.payload,
          };
        }
        case '@@LAYOUT/LOADING': {
          return {
            ...state, 
            loading: action.payload,
          };
        }
        case '@@LAYOUT/HOME': {
          //console.log(action.payload, 'action');
          return {
            ...state,
            homeSection: action.payload,
          };
        }
        case '@@LAYOUT/HOME_PRINCIPAL':{
          return {
            ...state,
            homeSectionPrincipal: action.payload,
          };
        }
        case '@@LAYOUT/INFO_MODAL':{
          return {
            ...state,
            infoModalShow: action.payload,
          };
        }
        default: {
          return state;
        }
      }
  }