import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
// remove this
import pin from "../icons/pin.png";

import firebase from 'firebase';
import axios from 'axios';
import querystring from 'querystring';

export default class EventCard extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            // does this include the day of the week prefix?
            eventTime: '',
            //okay is this in the db?
            eventTitle: '',
            description: '',
            // in the erd as an id, do I have to like lookup the id to see which
            // club in a string it is?
            club: '',
            location: '',
            // how do I initialize an image, what would catching an image look like?
            // oh my would this be like a hyperlink?
            image: ''
        };
    }


    render() {
        return (
            <Card style={Styles.card}>
                <Card.Body className="text-left">
                    <Col sm={{ span: 0, offset: 0 }}>
                        <Card.Subtitle style={Styles.dateText}><b><p> {this.props.eventTime} </p></b></Card.Subtitle>
                        <Card.Title style={Styles.eventTitle}><b>{this.props.eventTitle}</b></Card.Title>
                        <Card.Text style={Styles.eventHost}>
                            {this.props.club}
                         </Card.Text>

                        <Row>
                            <Col sm={{ span: .5, offset: 1 }}/>
                            <Card.Img src={ this.props.image } style={Styles.pinImage} />
                            <Card.Text style={Styles.locationText}> {this.props.location} </Card.Text>
                        </Row>

                        <Row>
                            <Col sm={{ span: 7, offset: 7 }}>
                                <Button variant="outline-info" style={Styles.button} onClick={navigateViewMore}>View More</Button>
                            </Col>
                        </Row>

                    </Col>
                </Card.Body>
            </Card>
        )
    }
}

const navigateViewMore = () => {
    window.location.href = "/viewEvent"
};

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
        // TODO: MAKE THIS AUTO? or make this min height so the cards can be all the same? dunno, or just make sure it can't get stretched out
        height: "11rem"
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
