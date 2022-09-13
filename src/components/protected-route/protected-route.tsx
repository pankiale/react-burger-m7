import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks/hooks";
import React, { FC } from "react";


interface IProtectedRouteProps {
  notAuthOnly: boolean
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({ notAuthOnly = false, children, ...rest }) => {
  const { user} = useSelector(state => state.auth);
  const location = useLocation<{from: string}>();

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