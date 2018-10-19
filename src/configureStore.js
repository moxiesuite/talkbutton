import { applyMiddleware, createStore, compose } from 'redux'
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

const history = createHistory();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

export default function configureStore(reducer) {
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  );

  const store = createStore(reducer, enhancer);

  return store
}

