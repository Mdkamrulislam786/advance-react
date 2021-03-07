import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MySuspense from "./components/Lazy-Suspense/Suspense";
import Home from "./components/Home/Home";
import Layout from "./Layout/index";
import ParentComp from "./components/PureComponent/ParentComp";
import Refs from "./components/Refs";
import Hooks from "./components/Hooks";
import Portals from "./components/Portals";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/suspense" exact component={MySuspense} />
          <Route path="/purecomponent" exact component={ParentComp} />
          <Route path="/refs" exact component={Refs} />
          <Route path="/hooks" exact component={Hooks} />
          <Route path="/portals" exact component={Portals} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
