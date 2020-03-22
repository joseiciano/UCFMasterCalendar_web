import React, { Component } from "react";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    );
  }
}

export default App;
