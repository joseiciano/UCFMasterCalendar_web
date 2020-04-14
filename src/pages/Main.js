import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import Welcome from "../components/Welcome";
import EventList from "../components/EventList";
import ClubList from "../components/ClubList";


export default class Main extends Component {
  render() {
      return (
          <div  style={Styles.homepage}>
              <Row>
                  <Col >
                      <Navbar/>
                  </Col>
              </Row>
              <br />
              <Row>
                  <Col>
                      <Welcome />
                  </Col>
              </Row>

              <br />
              <br />

              <Row>
                  <Col sm={{ span: 9, offset: 2 }}>
                      <EventList />  
                  </Col>
              </Row>

              <br />
              <br />

              <Row>
                  <Col sm={{ span: 7, offset: 2 }}>
                      <ClubList />
                  </Col>
              </Row>

              <br/>
              <br/>

          </div>
      );
  }
}

const Styles = {
    homepage: {
        // disables horizontal scrollbar
        overflowX: "hidden", 
    },

    button: {
        fontSize: "small",
        width: "74%",
        height: "87%",
        border: "none",
        backgroundColor: "white",
        color: "#1C8D9B",
    },

    navBar: {
    }

};