import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

// interface IRoutesProps {
//   isAuth: boolean;
// }

export const useRoutes = (isAuth: boolean) => {
  return isAuth ? (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Redirect to="/login" />
    </Switch>
  );
};
