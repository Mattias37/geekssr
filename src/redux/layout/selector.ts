export function getInitial(state: ReduxState) {
    return state.layout;
  }
  export function getAppBar(state: ReduxState) {
    return getInitial(state).appBar;
  }
  export function getDrawerSidebar(state: ReduxState) {
    return getInitial(state).drawerSidebar;
  }
  export function getCartSidebar(state: ReduxState) {
    return getInitial(state).cartSidebar;
  }
  export function getSearch(state: ReduxState) {
    return getInitial(state).search;
  }
  export function getShowDisbaledProduct(state: ReduxState) {
    return getInitial(state).showDisabledProduct;
  }
  export function getExitBr(state: ReduxState) {
    return getInitial(state).exitBr;
  }
  export function getHomeSelector(state: ReduxState) {
    return getInitial(state).homeSection;
  }
  export function getHomeSelectorPrincipal(state: ReduxState) {
    return getInitial(state).homeSectionPrincipal;
  }
  export function getLoadinLayout(state: ReduxState) {
    return getInitial(state).loading;
  }
    