import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import pin from "../icons/pin.png";
import firebase from 'firebase';
import axios from 'axios';
import querystring from 'querystring';


export default class EventCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            host: '',
            date: '',
            start: '',
            location: '',
            clubId: ''
        }
    };

    componentDidMount() {
        let currentComponent = this;

        // now get the club, do this after brian creates
        var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/clubs/" + this.props.clubId + "/";

        axios
            .get(
                hyper
            )
            .then(res => {
                console.log(res.data.data.name);
                currentComponent.setState({ host: res.data.data.name });
            })
            .catch(e => {
                console.log("Error getting club", e);
            });

    }

    render() {
        console.log(this.props.title);
        return (
            <Card style={Styles.card}>
                <Card.Body className="text-left">
                    <Col sm={{ span: 0, offset: 0 }}>
                        <Card.Subtitle style={Styles.dateText}><b><p>{this.props.date} at {this.props.start}</p></b></Card.Subtitle>
                        <Card.Title style={Styles.eventTitle}><b>{this.props.title}</b></Card.Title>
                        <Card.Text style={Styles.eventHost}>
                            Hosted by <b>{this.state.host} </b>
                        </Card.Text>

                        <Row>
                            <Col sm={{ span: .5, offset: 1 }}/>
                            <Card.Img src={pin} style={Styles.pinImage} />
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
        height: "87%",
        marginTop: "10%"
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
