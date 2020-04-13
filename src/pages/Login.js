import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLoginWindow from "../components/MainLoginWindow";

export default class Login extends Component {
  render() {
      return (
          <div  style={Styles.backdrop}>
            <Row>
                  <Col>
                      <MainLoginWindow/>
                  </Col>
              </Row>
          </div>
      );
  }
}

const Styles = {
  backdrop: {
    // Positioning
    position: "fixed",
    overflowX: "hidden",

    // Display
    width: "100%",
    height: "100%",

    // Color
    background:
      "linear-gradient(90deg, rgba(162,224,221,1) 34%, rgba(160,241,237,1) 71%, rgba(221,255,255,1) 100%)"
  },
 
};
