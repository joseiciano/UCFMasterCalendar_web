import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import HorizontalEvent from "../components/HorizontalEvent";


export default class AllEvents extends Component {
    render() {
        return (
            <div style={Styles.allpage}>
                <Row>
                    <Col >
                        <Navbar/>
                    </Col>
                </Row>
                <br />
                

                <Row>
                    <Col sm={{ span: 11, offset: 1 }}>
                        <p style={Styles.title}> <b> Events </b> </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 11, offset: 1 }}>
                        <HorizontalEvent />
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 11, offset: 1 }}>
                        <HorizontalEvent />
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 11, offset: 1 }}>
                        <HorizontalEvent />
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 11, offset: 1 }}>
                        <HorizontalEvent />
                    </Col>
                </Row>
            </div>
        );
    }
}

const Styles = {
    allPage: {
        // disables horizontal scrollbar
        overflowX: "hidden",
    },

    title: {
        fontSize: "x-Large"
    }
};