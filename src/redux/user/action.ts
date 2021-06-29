import { cleanProfileStore } from '../profile/action';

const setUserLoading = (isLoading?: boolean) => ({
  type: '@@USER/SET_LOADING',
  payload: isLoading,
});

export const userMe: AsyncAction = () => {
  return async (dispatch, getState, { AuthService }) => {
    dispatch(setUserLoading(true));
    try {
      const { data: profile } = await AuthService.me();
      dispatch({
        type: '@@USER/SET_USER',
        payload: { profile: profile.data },
      });
    } catch (error) {
      dispatch(logOutUser(false));
    } finally {
      dispatch(setUserLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const updateMe: AsyncAction = (body) => {
  return async (dispatch, getState, { AuthService }) => {
    dispatch(setUserLoading(true));
    try {
      await AuthService.putUpdateMe(body);
      const res = await AuthService.me();
      console.log(res);
      const { data: profile } = res;
      dispatch({
        type: '@@USER/SET_USER',
        payload: { profile: profile.data },
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setUserLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const updateMePhoto: AsyncAction = (body: any) => {
  return async (dispatch, getState, { AuthService }) => {
    dispatch(setUserLoading(true));
    try {
      await AuthService.putUpdateMePhoto(body);
      const { data: profile } = await AuthService.me();
      dispatch({
        type: '@@USER/SET_USER',
        payload: { profile: profile.data },
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setUserLoading(false));
      // SplashScreen.hide();
    }
  };
};

export const loginUser: AsyncAction = ({
  email,
  password,
}: Record<string, any>) => {
  return async (dispatch, getState, { AuthService }) => {
    dispatch(setUserLoading(true));
    try {
      const { data } = await AuthService.login(email, password);
      dispatch({
        type: '@@USER/SET_TOKEN',
        payload: data.data.token,
        success: {
          id: 'loginUser',
          message: data.message,
        },
      });
      dispatch(cleanProfileStore());
      const { data: profile } = await AuthService.me();
      dispatch(claerUserError())
      dispatch({
        type: '@@USER/SET_USER',
        payload: { profile: profile.data },
      });
    } catch (error) {
      console.log(error)
      dispatch({
        type: '@@CONFIG/LOAD_FAILED',
        error: {
          id: 'loginUserError',
          message: error || 'error al iniciar sesion',
          close: 10000,
        },
      });
      dispatch(setUserError(error.response));
    } finally {
      dispatch(setUserLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const registerUser: AsyncAction = (values: Record<string, any>) => {
  const { username, email, password, phone, day, month, year, receiveEmails } = values;
  return async (dispatch, getState, { AuthService }) => {
    dispatch(setUserLoading(true));
    try {
      const { data } = await AuthService.register(
        username,
        email,
        phone,
        password,
        `${day}/${month}/${year}`,
        receiveEmails
      );

      if (data.code === 400) {
        throw data.message;
      }

      dispatch({
        type: '@@USER/SET_TOKEN',
        payload: data.data.token,
        success: {
          id: 'registerUser',
          message: data.message,
        },
      });
      dispatch(cleanProfileStore());
      const { data: profile } = await AuthService.me();
      dispatch(claerUserError())
      dispatch({
        type: '@@USER/SET_USER',
        payload: { profile: profile.data },
      });
    } catch (error) {
      dispatch({
        type: '@@CONFIG/LOAD_FAILED',
        error: {
          id: 'registerUserError',
          message: error.message,
          close: 10000,
        },
      });
      dispatch(setUserError(error.response));
    } finally {
      dispatch(setUserLoading(false));
      // SplashScreen.hide();
    }
  };
};
export const logOutUser: AsyncAction = (message = true) => {
  return async (dispatch) => {
    dispatch({
      type: '@@USER/CLEAR_USER',
      success: message
        ? {
          id: 'clearUser',
          message: 'Has cerrado sesión con exito!',
        }
        : undefined,
    });
  };
};


export const setUserError: AsyncAction = (error: any) => {
  return async (dispatch) => {
    dispatch({
      type: '@@USER/SET_USER_ERROR',
      payload: { error: error },
    });
  };
};

export const claerUserError: AsyncAction = () => {
  return async (dispatch) => {
    dispatch({
      type: '@@USER/SET_USER_ERROR',
      payload: {},
    });
  };
};