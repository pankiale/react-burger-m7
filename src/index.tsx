import ReactDOM from "react-dom";
import App from "./app/app";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./services/store";

ReactDOM.render(

  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>
  , document.querySelector("#root"));
