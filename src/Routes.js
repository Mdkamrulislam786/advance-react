import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MySuspense from "./components/Lazy-Suspense/Suspense";
import Home from "./components/Home/Home";
import Layout from "./Layout/index";
import ParentComp from "./components/PureComponent/ParentComp";
import RefsDemo from "./components/Refs/RefsDemo";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/suspense" exact component={MySuspense} />
          <Route path="/purecomponent" exact component={ParentComp} />
          <Route path="/refs" exact component={RefsDemo} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
