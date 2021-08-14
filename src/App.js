import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import BookingPlan from './pages/BookingPlan'
import BookingInfo from './pages/BookingInfo'
import BookingSuccess from './pages/BookingSuccess'

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/booking/plan" component={BookingPlan} /> 
          <Route exact path="/booking/info" component={BookingInfo} /> 
          <Route exact path="/booking/success" component={BookingSuccess} />
        </Switch>
      </Router>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
