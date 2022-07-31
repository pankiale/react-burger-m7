import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import { LoginPage } from "../../pages/login/login";
import { NotFound404 } from "../../pages/notFound/not-found";
import styles from "../../pages/home/home.module.css";
import AppHeader from "../app-header/app-header";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
