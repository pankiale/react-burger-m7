import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
import Modal from "../components/modals/modals";
import IngredientDetails from "../components/modals/ingredient-details/ingredient-details";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getItems } from "../services/actions/ingredients";


function App() {

  const location = useLocation();
  const history = useHistory();
  const background = location.state?.background;
  const dispatch = useDispatch();


  const onCloseBtnClick = (e) => {
    e.stopPropagation();
    history.goBack();}


  useEffect(
    () => {
      dispatch(getItems());
    },
    []
  );
  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <Switch location={background || location}>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/profile" exact={true}>
            <ProfilePage />
          </Route>
          <Route path="/registration" exact={true}>
            <RegistrationPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPasswordPage />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/ingredients/:ingredientId">
            <IngredientDetails />
          </Route>
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </div>
      {background && <Route path="/ingredients/:ingredientId" children={
        <Modal header="Детали Ингридиента" onCloseBtnClick={onCloseBtnClick}>
          <IngredientDetails />
        </Modal>
      } />}
    </>
  );
}

export default App;
