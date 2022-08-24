import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { NotFound404 } from "../pages/notFound/not-found";
import styles from "../pages/home/home.module.css";
import AppHeader from "../components/app-header/app-header";
import { RegistrationPage } from "../pages/registration/registration";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../pages/reset-password/reset-password";
import { ProtectedRoute } from "../components/protected-route/protected-route";
import { ProfilePage } from "../pages/profile/profile";
import Modal from "../components/modals/modals";
import IngredientDetails from "../components/modals/ingredient-details/ingredient-details";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getItems } from "../services/actions/ingredients";
import { checkToken, refreshToken } from "../services/actions/auth";
import Feed from "../pages/feed/feed";
import OrderDetails from "../components/modals/order-details/order-details";
import FeedOrderDetails from "../components/modals/feed-order-details/feed-order-details";

function App() {

  const location = useLocation();
  const history = useHistory();
  const background = location.state?.background;
  const dispatch = useDispatch();
  const token = localStorage.getItem("refreshToken");
  const onCloseBtnClick = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  useEffect(() => {

    dispatch(getItems());

      async function checkUser() {
        await dispatch(refreshToken());
        await dispatch(checkToken());

      }

      if (token) {
        checkUser()
          .catch((err) => {
            console.log(err);
          });
      }

    }, []
  );

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <Switch location={background || location}>
          <ProtectedRoute notAuthOnly={true} path="/login" exact>
            <LoginPage />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" exact>
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute notAuthOnly={true} path="/registration" exact>
            <RegistrationPage />
          </ProtectedRoute>
          <ProtectedRoute notAuthOnly={true} path="/forgot-password" exact>
            <ForgotPasswordPage />
          </ProtectedRoute>
          <ProtectedRoute notAuthOnly={true} path="/reset-password" exact>
            <ResetPasswordPage />
          </ProtectedRoute>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/feed" exact>
            <Feed />
          </Route>
          <Route path="/feed/:orderId">
            <FeedOrderDetails url={"/all"} />
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
      {background && <Route path="/feed/:orderId" children={
        <Modal header="" onCloseBtnClick={onCloseBtnClick}>
          <FeedOrderDetails />
        </Modal>
      } />}
    </>
  );
}

export default App;
