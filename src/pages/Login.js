import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLoginWindow from "../components/MainLoginWindow";

export default class Main extends Component {
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

    // Display
    width: "100%",
    height: "100%",

    // Color
    background:
      "linear-gradient(90deg, rgba(162,224,221,1) 34%, rgba(160,241,237,1) 71%, rgba(221,255,255,1) 100%)"
  },
  mainWindow: {
    // Positioning
    position: "relative",
    margin: "0 auto",
    top: "13%",

    // Display
    width: "70%",
    height: "80%",
    flexDirection: "column"
  },
  left: {
    // Positioning
    position: "relative",
    float: "left",

    // Display
    height: "100%",
    width: "40%",

    // Color
    backgroundColor: "white",
    borderRadius: "15px 0px 0px 15px "
  },
  img: {
    // Positioning
    position: "relative",
    float: "right",
    // Display
    width: "60%",
    height: "100%",
    borderRadius: "0px 15px 15px 0px"
  }
};
