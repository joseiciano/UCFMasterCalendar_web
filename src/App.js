import React, { Component } from "react";
import logo from "./logo.svg";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    );
  }
}

export default App;
