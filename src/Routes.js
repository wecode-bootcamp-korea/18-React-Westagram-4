import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginSong from "./Pages/dahyesong/Login/Login";
import LoginBae from "./Pages/damhobae/Login/Login";
import LoginHong from "./Pages/laeyounghong/Login/Login";
import LoginKim from "./Pages/hyunjoongkim/Login/Login";
import MainSong from "./Pages/dahyesong/Main/Main";
import MainBae from "./Pages/damhobae/Main/Main";
import MainHong from "./Pages/laeyounghong/Main/Main";
import MainKim from "./Pages/hyunjoongkim/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-song" component={LoginSong} />
          <Route exact path="/login-bae" component={LoginBae} />
          <Route exact path="/login-hong" component={LoginHong} />
          <Route exact path="/login-kim" component={LoginKim} />
          <Route exact path="/main-song" component={MainSong} />
          <Route exact path="/main-bae" component={MainBae} />
          <Route exact path="/main-hong" component={MainHong} />
          <Route exact path="/main-kim" component={MainKim} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
