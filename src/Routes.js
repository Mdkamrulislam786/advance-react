import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MySuspense from "./pages/Lazy-Suspense/Suspense";
import Home from "./pages/Home/Home";
import Layout from "./Layout/index";
import ParentComp from "./pages/PureComponent/ParentComp";
import Refs from "./pages/Refs";
import Hooks from "./pages/Hooks";
import Portals from "./pages/Portals";
import Profiler from "./pages/Profiler/Profiler";
import HookForm from "./pages/how-does-the-browser-works";

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
          <Route path="/profiler" exact component={Profiler} />
          <Route path="/react-hook-form" exact component={HookForm} />
          <Route
            path="/how-does-the-browser-works"
            exact
            component={HookForm}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
