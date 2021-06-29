import * as rx from 'retry-axios';
import axios from 'axios';
import { Store } from 'redux';
import { getToken } from '../redux/user/selectors';

export const applyInterceptors = (store: Store) => {
  axios.interceptors.request.use((config) => {
    const newConfig = { ...config };
    const reduxState = store.getState();
    const authToken = getToken(reduxState);

    if (authToken) {
      newConfig.headers.Authorization = `Bearer ${authToken}`;
    }
    return newConfig;
  });

  axios.interceptors.response.use((response) => {
    if (typeof response.data !== 'object') {
      throw Error('Wrong data format from backend');
    }
    return response;
  });

  axios.defaults.raxConfig = {
    statusCodesToRetry: [[500, 599]],
  };

  rx.attach();
};
