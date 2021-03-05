import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MySuspense from "./components/Lazy-Suspense/Suspense";
import Home from "./components/Home/Home";
import Layout from "./Layout/index";
const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/suspense" exact component={MySuspense} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
