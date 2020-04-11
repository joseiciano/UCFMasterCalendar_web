import React, { Component } from "react";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllEvents from "./pages/AllEvents";
import CreateEventPage from "./pages/CreateEventPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/allEvents" component={AllEvents} />
        <Route exact path="/createEvent" component={CreateEventPage} />
      </Router>
    );
  }
}

export default App;
