export function getInitial(state: any) {
    return state.layout;
  }
  export function getAppBar(state: any) {
    return getInitial(state).appBar;
  }
  export function getDrawerSidebar(state: any) {
    return getInitial(state).drawerSidebar;
  }
  export function getCartSidebar(state: any) {
    return getInitial(state).cartSidebar;
  }
  export function getSearch(state: any) {
    return getInitial(state).search;
  }
  export function getShowDisbaledProduct(state: any) {
    return getInitial(state).showDisabledProduct;
  }
  export function getExitBr(state: any) {
    return getInitial(state).exitBr;
  }
  export function getHomeSelector(state: any) {
    return getInitial(state).homeSection;
  }
  export function getHomeSelectorPrincipal(state: any) {
    return getInitial(state).homeSectionPrincipal;
  }
  export function getLoadinLayout(state: any) {
    return getInitial(state).loading;
  }
    