import { mapperNotice } from './mapper';

const setNoticeLoading = (isLoading?: boolean) => ({
  type: '@@NOTICE/SET_LOADING',
  payload: isLoading,
});

export const getNotices: AsyncAction = () => {
  return async (dispatch, _getState, { NoticeService }) => {
    dispatch(setNoticeLoading(true));
    try {
      const { data } = await NoticeService.getNotices();
      console.log(data);
      dispatch({
        type: '@@NOTICE/SET_NOTICES',
        payload: mapperNotice(data.data),
      });
    } catch (error) {
      dispatch({
        type: '@@NOTICE/LOAD_FAILED',
      });
    } finally {
      dispatch(setNoticeLoading(false));
    }
  };
};
export const getNoticeSelected: AsyncAction = (id: string) => {
  return async (dispatch, _getState, { NoticeService }) => {
    dispatch(setNoticeLoading(true));
    try {
      const { data } = await NoticeService.getNoticeById(id);

      if (data.code === 400) {
        throw data.message;
      }

      dispatch({
        type: '@@NOTICE/SET_NOTICES_SELECTED',
        payload: data.data,
        success: {
          id: 'registerUser',
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: '@@NOTICE/LOAD_FAILED',
        error: {
          id: 'registerUserError',
          message: error,
          close: 1000,
        },
      });
    } finally {
      dispatch(setNoticeLoading(false));
    }
  };
};
export const subscribeToNewsLetter: AsyncAction = (email: any) => {
  return async (dispatch, _getState, { NoticeService }) => {
    dispatch(setNoticeLoading(true));
    try {
      const { data } = await NoticeService.subscribeToNewsLetter(email);
      if (data.code === 400) {
        throw data.message;
      }
      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setNoticeLoading(false));
    }
  };
};

export const clearNoticeSelected = (id?: string) => {
  return {
    type: '@@NOTICE/SET_NOTICES_SELECTED_CLEAR',
    payload: id,
  };
};
