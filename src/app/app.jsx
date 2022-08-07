import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { NotFound404 } from "../pages/notFound/not-found";
import styles from "../pages/home/home.module.css";
import AppHeader from "../components/app-header/app-header";
import { RegistrationPage } from "../pages/registration/registration";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../pages/reset-password/resett-password";
import { ProtectedRoute } from "../utils/protected-route";
import { ProfilePage } from "../pages/profile/profile";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/registration/login">
            <LoginPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <ProtectedRoute path="/registration/registration" exact={true}>
            <RegistrationPage />
          </ProtectedRoute>
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
