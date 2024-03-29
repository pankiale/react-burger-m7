import { Switch, Route, useHistory } from "react-router-dom";
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
import React, { useEffect } from "react";
import { getItemsThunk } from "../services/actions/ingredients";
import { checkTokenThunk, refreshTokenThunk } from "../services/actions/auth";
import Feed from "../pages/feed/feed";
import FeedOrderDetails from "../components/modals/feed-order-details/feed-order-details";
import { ProfileOrdersPage } from "../pages/profile-orders/profile-orders";
import { getCookie } from "../utils/cookie";
import { useDispatch } from "../services/hooks/hooks";

export interface ILocation {
  from: Location;
  background?: Location&{state: Location};
  pathname?: string;
}
 //пришлось добавить в интерфейс state иначе ломается switch
function App() {
  const cookie = getCookie("token");
  const location = useLocation<ILocation>();
    const history = useHistory();
    const background = location.state?.background;
    const dispatch = useDispatch();
    const token = localStorage.getItem("refreshToken");
    const onCloseBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent> | KeyboardEvent) => {
      e.stopPropagation();
      history.goBack();
    };

    useEffect(() => {

        dispatch(getItemsThunk());

        async function checkUser() {
          await dispatch(refreshTokenThunk());
          await dispatch(checkTokenThunk());

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
            <ProtectedRoute path="/profile/orders" exact>
              <ProfileOrdersPage />
            </ProtectedRoute>
            <ProtectedRoute path="/profile/orders/:orderId" exact>
              <FeedOrderDetails url={`?token=${cookie}`} />
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
        {background && <Route path="/profile/orders/:orderId" children={
          <Modal header="" onCloseBtnClick={onCloseBtnClick}>
            <FeedOrderDetails />
          </Modal>
        } />}
      </>
    );
  }
  export default App;
