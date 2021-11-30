import React from "react";
import { Route, HashRouter as Router, Redirect } from "react-router-dom";
import { ROUTES } from "../services/constants/Index";
import { Login, Register } from "../pages/authentication";
import { LandingPage, People } from "../pages/view";

const Routing = () => {
  console.log("localStorage.getItem", localStorage.getItem("token"));
  return (
    <>
      <Router>
        <Route path={ROUTES.LOGIN} component={Login} exact />
        <Route path={ROUTES.REGISTER} component={Register} exact />
        <Route path={ROUTES.HOME} component={LandingPage} exact />

        <Route path={ROUTES.PEOPLE} component={People} exact />
      </Router>
    </>
  );
};
export default Routing;
