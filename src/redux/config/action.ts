const setConfigLoading = (isLoading?: boolean) => ({
  type: '@@CONFIG/SET_LOADING',
  payload: isLoading,
});

export const fetchConfig: AsyncAction = () => {
  return async (dispatch, getState, apiClient) => {
    dispatch(setConfigLoading(true));
    try {
      if (true) {
        const apIUrl = `PUBLIC_API_${process.env.PUBLIC_API_STAGE}`;
        //console.log(process.env[apIUrl]);
        apiClient.buildServices({ apiUrl: process.env[apIUrl]! });
      }
    } catch (error) {
    } finally {
      dispatch(setConfigLoading(false));
      // SplashScreen.hide();
    }
  };
};

export const refreshConfig: AsyncAction = () => {
  return async (dispatch, getState, apiClient) => {
    dispatch(setConfigLoading(true));
    try {
      if (true) {
        const apIUrl = `PUBLIC_API_${process.env.PUBLIC_API_STAGE}`;
        //console.log(process.env[apIUrl]);
        apiClient.buildServices({ apiUrl: process.env[apIUrl]! });
      }
    } catch (error) {
      dispatch({
        type: '@@CONFIG/LOAD_FAILED',
      });
    } finally {
      dispatch(setConfigLoading(false));
    }
  };
};
export const getSponsors: AsyncAction = () => {
  return async (dispatch, getState, { ProfileService }) => {
    //dispatch(setConfigLoading(true));
    try {
      const { data } = await ProfileService.getSponsors();
      dispatch({
        type: '@@CONFIG/SET_SPONSORS',
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: '@@CONFIG/LOAD_FAILED',
      });
    } finally {
      //dispatch(setConfigLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const getTransmitions: AsyncAction = () => {
  return async (dispatch, getState, { HomeService }) => {
    //dispatch(setConfigLoading(true));
    try {
      const { data } = await HomeService.transmitionsRest();
      dispatch({
        type: '@@CONFIG/SET_TRANSMITIONS',
        payload: data.data.transmissionData,
      });
    } catch (error) {
      dispatch({
        type: '@@CONFIG/LOAD_FAILED',
      });
    } finally {
      //dispatch(setConfigLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const getPublications: AsyncAction = () => {
  return async (dispatch, getState, { HomeService }) => {
    // dispatch(setConfigLoading(true));
    // console.log('getPublications')
    try {
      const { data } = await HomeService.publicationsRest();
      // console.log(data)
      dispatch({
        type: '@@CONFIG/SET_PUBLICATIONS',
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: '@@CONFIG/LOAD_FAILED',
      });
    } finally {
      //dispatch(setConfigLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const getPublicationsById: AsyncAction = (id: string) => {
  return async (dispatch, getState, { HomeService }) => {
    //dispatch(setConfigLoading(true));
    // console.log('getPublications')
    try {
      const { data } = await HomeService.publicationsRestById(id);
      // console.log(data)
      dispatch({
        type: '@@CONFIG/SET_PUBLICATIONS_SELECTED',
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: '@@CONFIG/LOAD_FAILED',
      });
    } finally {
      //dispatch(setConfigLoading(false));
      // SplashScreen.hide();
    }
  };
};