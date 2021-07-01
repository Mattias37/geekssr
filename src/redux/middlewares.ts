import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiClient } from '../services';

const enhancers = [thunk.withExtraArgument(apiClient), /* , showError, showSuccess */];

export const AppMiddlewares = () => {
  let middlewares = compose(applyMiddleware(...enhancers));
  // eslint-disable-next-line no-undef
  if (process.env.NEXT_PUBLIC_API_STAGE === 'PROD') {
    middlewares = composeWithDevTools(middlewares);
  }
  return middlewares;
};
