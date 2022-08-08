import { useDispatch, useSelector } from "react-redux";
import {
  checkToken, refreshToken
} from "../services/actions/auth";
import { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { getCookie } from "./cookie";


export function ProtectedRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const { tokenSuccess, isUserLoaded, refreshTokenSuccess } = useSelector(state => state.auth);

  const checkTokenRequest = async () => {
    try {
      await dispatch(checkToken());
    } catch (err) {
      await dispatch(refreshToken());
      await dispatch(checkToken());
    }
  };
  useEffect(() => {
    checkTokenRequest()
      .finally();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        tokenSuccess ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}