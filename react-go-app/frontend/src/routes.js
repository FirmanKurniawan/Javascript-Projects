import React, { Component } from "react";
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/LoginComponent/Login";
import Register from "./components/RegisterComponent/Register";
class Routes extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route exact path="/" component={withRouter(Login)} />
          <Route path="/index" component={withRouter(App)} />
          <Route path="/register" component={withRouter(Register)} />
          <Route path="/login" component={withRouter(Login)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
