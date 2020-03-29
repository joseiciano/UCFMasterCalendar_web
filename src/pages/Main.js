import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import EventCard from "../components/EventCard";
import Welcome from "../components/Welcome";

export default class Main extends Component {
  render() {
      return (
          <div>
              <Navbar />
              <br />
              <Welcome />
          </div>
      );
  }
}
