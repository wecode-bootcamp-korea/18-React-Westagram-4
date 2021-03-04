import React, { Component } from "react";
import { BrouserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/dahyesong/Login/Login";
import Login from "./Pages/damhobae/Login/Login";
import Login from "./Pages/laeyounghong/Login/Login";
import Login from "./Pages/hyunjoongkim/Login/Login";
import Main from "./Pages/dahyesong/Main/Main";
import Main from "./Pages/damhobae/Main/Main";
import Main from "./Pages/laeyounghong/Main/Main";
import Main from "./Pages/hyunjoongkim/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="./Pages/dahyesong/Login/Login'"
            component={Login}
          />
          <Route exact path="./Pages/damhobae/Login/Login'" component={Login} />
          <Route
            exact
            path="./Pages/laeyounghong/Login/Login'"
            component={Login}
          />
          <Route
            exact
            path="./Pages/hyunjoongkim/Login/Login'"
            component={Login}
          />
          <Route exact path="./Pages/dahyesong/Main/Main'" component={Main} />
          <Route exact path="./Pages/damhobae/Main/Main'" component={Main} />
          <Route
            exact
            path="./Pages/laeyounghong/Main/Main'"
            component={Main}
          />
          <Route
            exact
            path="./Pages/hyunjoongkim/Main/Main'"
            component={Main}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
