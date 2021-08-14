import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/search" component={Search} />
        <PrivateRoute exact path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
