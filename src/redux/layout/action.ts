const setLayoutLoading = (isLoading?: boolean) => ({
    type: '@@LAYOUT/LOADING',
    payload: isLoading,
  });
  
  export const changeAppBar = (flag: boolean): LayoutActionType => ({
    type: '@@LAYOUT/DRAWER_SIDEBAR',
    payload: flag,
  });
  
  export const changeDrawerSidebar = (flag: boolean): LayoutActionType => ({
    type: '@@LAYOUT/DRAWER_SIDEBAR',
    payload: flag,
  });
  
  export const changeCartSidebar = (flag: boolean): LayoutActionType => ({
    type: '@@LAYOUT/CART_SIDEBAR',
    payload: flag,
  });
  
  export const ChangedSearchInput = (search: string): LayoutActionType => ({
    type: '@@LAYOUT/SEARCH',
    payload: search,
  });
  
  export const showDisabledProduct = (flag: boolean): LayoutActionType => ({
    type: '@@LAYOUT/DISABLED_PRODUCT',
    payload: flag,
  });
  
  export const changeExitBR = (flag: boolean): LayoutActionType => ({
    type: '@@LAYOUT/EXIT_BR',
    payload: flag,
  });
  
  export const getHome: AsyncAction = () => {
    return async (dispatch, getState, { HomeService }) => {
      dispatch(setLayoutLoading(true));
      try {
        const { data } = await HomeService.home();
        console.log(data);
        dispatch({
          type: '@@LAYOUT/HOME',
          payload: data,
        });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLayoutLoading(false));
      }
    };
  };
  export const getHomePrincipal: AsyncAction = () => {
    return async (dispatch, getState, { HomeService }) => {
      dispatch(setLayoutLoading(true));
      try {
        const { data } = await HomeService.homePrincipal();
        console.log(data);
        dispatch({
          type: '@@LAYOUT/HOME_PRINCIPAL',
          payload: data,
        });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLayoutLoading(false));
      }
    };
  };
  