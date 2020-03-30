import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck, Card, Row, Col, Button } from 'react-bootstrap';
import ClubCard from "../components/ClubCard";

export default class ClubList extends Component {
    render() {
        return (
            <Card style={Styles.card}>
                <Row>
                    <Col sm={{ span: 6, offset: 0 }}>
                        <Card.Text> <b> Upcoming Events </b> </Card.Text>
                    </Col>

                    <Col sm={{ span: 2, offset: 2 }}>
                        <Button style={Styles.button}> <b>See all </b></Button>
                    </Col>
                </Row>

                <Row>
                    <Col lg={{ span: 5, offset: 0 }}>
                        <Card.Text style={Styles.subtitle}> See what's happening soon in your area. </Card.Text>
                    </Col>

                </Row>

                <Row>
                    <Col sm={{ span: 3, offset: 0 }}>
                        <ClubCard />
                    </Col>
                    <Col sm={{ span: 3, offset: 0 }}>

                        <ClubCard />
                    </Col>
                    <Col sm={{ span: 3, offset: 0 }}>
                        <ClubCard />
                    </Col>
                </Row>
            </Card>
        )
    }
}

const Styles = {
    card: {
        width: "60rem",
        border: "none",
    },

    subtitle: {
        fontSize: "small",
        //color: "#7C7C7C"
    },

    button: {
        fontSize: "small",
        width: "74%",
        height: "87%",
        border: "none",
        backgroundColor: "white",
        color: "#1C8D9B",
    }
};