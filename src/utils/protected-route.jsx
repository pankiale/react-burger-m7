import { useDispatch, useSelector } from "react-redux";
import {
  checkToken, refreshToken
} from "../services/actions/auth";
import { useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { getCookie } from "./cookie";


export function ProtectedRoute({ notAuthOnly = false, children, ...rest }) {
  const dispatch = useDispatch();
  const { tokenSuccess, isUserLoaded, user, refreshTokenSuccess } = useSelector(state => state.auth);
  const location = useLocation();

  /*const checkTokenRequest = async () => {
    try {
      await dispatch(checkToken());
    } catch (err) {
      await dispatch(refreshToken());
      await dispatch(checkToken());
    }
  };*/
  /*  useEffect(() => {
      checkTokenRequest()
        .finally();
    }, []);*/

/*  if (!isUserLoaded) {
    return null;
  }*/

  if (notAuthOnly && Object.keys(user).length > 0) {
    const { from } = location.state || { from: { pathname: "/" } };
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }
  if (!notAuthOnly && !Object.keys(user).length) {
    return (
      <Route {...rest}>
        <Redirect to={{pathname: '/login', state: {from: location}}} />
      </Route>
    );
  }
  return <Route {...rest}>{children}</Route>
}