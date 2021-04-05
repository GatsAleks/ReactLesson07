import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Users from "../Users/Users";
import Albums from "../Albums/Albums";
import LinkComponent from "../LinkComponent/LinkComponent";
import "./Container.css";

export default function Container() {
  return (
    <Router>
      <div className="linkContainer">
        <LinkComponent path="/dashboard" name="Dashboard" />
        <LinkComponent path="/users" name="Users" />
        <LinkComponent path="/albums" name="Albums" />
      </div>

      <hr />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/albums" component={Albums} />
      </Switch>
    </Router>
  );
}
