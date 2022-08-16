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
import { ProtectedRoute } from "../utils/protected-route";
import { ProfilePage } from "../pages/profile/profile";
import Modal from "../components/modals/modals";
import IngredientDetails from "../components/modals/ingredient-details/ingredient-details";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getItems } from "../services/actions/ingredients";
import { CHECK_TOKEN_SUCCESS, checkToken, refreshToken } from "../services/actions/auth";
import { getCookie } from "../utils/cookie";


function App() {

  const location = useLocation();
  const history = useHistory();
  const background = location.state?.background;
  const dispatch = useDispatch();
  const token = getCookie('token')

  const onCloseBtnClick = (e) => {
    e.stopPropagation();
    history.goBack();
  };


  useEffect(
    () => {
      dispatch(getItems());
    },
    []
  );

  const checkUser = async () => {
    try {return await dispatch(checkToken())}
    catch (err) {
        console.log(err)
      await dispatch(refreshToken())
      await dispatch(checkToken())
      };
  }

  useEffect(
    ()=> {
        checkUser()
          .catch(err=>{return console.log(err) });
    }
  )

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
