import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import { LoginPage } from "../../pages/login/login";
import { NotFound404 } from "../../pages/notFound/not-found";
import styles from "../../pages/home/home.module.css";
import AppHeader from "../app-header/app-header";
import { RegistrationPage } from "../../pages/registration/registration";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../../pages/reset-password/resett-password";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/registration/login">
            <LoginPage />
          </Route>
          <Route path="/registration/registration" exact={true}>
            <RegistrationPage />
          </Route>
          <Route path="/registration/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path="/registration/reset-password" exact={true}>
            <ResetPasswordPage />
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
