import { Route } from "react-router-dom";
import { Redirect, useLocation } from "react-router-dom";

export default function ProtectedRoute({
  anonymous = false,
  isAuth,
  children,
  path,
  ...rest
}) {
  const location = useLocation();

  if (anonymous && isAuth) {
    return <Redirect to="/" />;
  }

  if (!anonymous && !isAuth) {
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  }

  return <Route exact={true} {...rest}>{children}</Route>;
}

