import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navbar";
import ShortenUrl from "./shorten-url";
import AllLinks from "./all-links";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router className="router">
          <div className="routes-wrapper">
            <Navbar />

            <Switch className="content-wrapper">
              <Route exact path="/" component={ShortenUrl} />
              <Route path="/all-links" component={AllLinks} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
