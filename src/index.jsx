import ReactDOM from "react-dom";
import App from "./app/app";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from './services/reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector("#root"));
