import ReactDOM from "react-dom";
import App from "./app/app";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from './services/reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom";
import { socketMiddleware } from "./services/middleware/socket-middleware";
import { wsActions, wsUrl } from "./utils/ws";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(socketMiddleware(wsUrl, wsActions))
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(

  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>
  , document.querySelector("#root"));
