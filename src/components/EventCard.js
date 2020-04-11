import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import pin from "../icons/pin.png"


export default class EventCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            host: '',
            startTime: null,
            location: '',
        }
    };

    render() {
        console.log(this.props.title);
        return (
            <Card style={Styles.card}>
                <Card.Body className="text-left">
                    <Col sm={{ span: 0, offset: 0 }}>
                        <Card.Subtitle style={Styles.dateText}><b><p>{this.props.startTime}</p></b></Card.Subtitle>
                        <Card.Title style={Styles.eventTitle}><b>{this.props.title}</b></Card.Title>
                        <Card.Text style={Styles.eventHost}>
                            Hosted by {this.props.host}
                        </Card.Text>

                        <Row>
                            <Col sm={{ span: .5, offset: 1 }}/>
                            <Card.Img src={pin} style={Styles.pinImage} />
                            <Card.Text style={Styles.locationText}> {this.props.location} </Card.Text>
                        </Row>

                        <Row>
                            <Col sm={{ span: 7, offset: 7 }}>
                                <Button variant="outline-info" style={Styles.button}>View More</Button>
                            </Col>
                        </Row>

                    </Col>
                </Card.Body>
            </Card>
        )
    }
}

const Styles = {

    eventHost: {
        fontSize: "x-small"
    },

    button: {
        fontSize: "xx-small",
        width: "74%",
        height: "87%"
    },

    eventTitle: {
        fontSize: "small",
    },

    card: {
        width: "16rem",
        height: "11rem",
        margin: "0.7rem"
    },

    locationText: {
        fontSize: "x-small"
    },

    dateText: {
        color: "#1198AB",
        fontSize: "x-small"
    },

    pinImage: {
        height: "7%",
        width:"7%"
    }
    
};
