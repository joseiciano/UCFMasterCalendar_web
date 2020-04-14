import React, { Component } from "react";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllClubs from "./pages/AllClubs";
import AllEvents from "./pages/AllEvents";
import CreateClubPage from "./pages/CreateClubPage";
import CreateEventPage from "./pages/CreateEventPage";
import Swagger from "./components/Swagger";
import { BrowserRouter as Router, Route } from "react-router-dom";

// yes login and register are opposite I know
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={Register} />
        <Route exact path="/register" component={Login} />
        <Route exact path="/allClubs" component={AllClubs} />
        <Route exact path="/allEvents" component={AllEvents} />
        <Route exact path="/createClub" component={CreateClubPage} />
        <Route exact path="/createEvent" component={CreateEventPage} />
        <Route exact path="/swagger" component={Swagger} />
      </Router>
    );
  }
}

export default App;