import React, { Component } from "react";
import { Row, Col, Form, Card, Dropdown, Button } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import * as firebase from "firebase/app";
import axios from "axios";

export default class CreateEventPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            host: '',
            title: '',
            description: '',
            endTime: '',
            startTime: '',
            location: '',
            clubId: '',
            clubs: [],
            userId: ''
        };

        this.handleHostChange = this.handleHostChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleClubIdChange = this.handleClubIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleHostChange(event) {
        this.setState({
            host: event.target.value
        });

        console.log("host is:" + event.target.value);
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });

        console.log(event)
        console.log("title is:" + event.target.value);

    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        });

        console.log("description is:" + event.target.value);

    }

    handleStartTimeChange(event) {
        this.setState({
            startTime: event.target.value
        });

        console.log("start Time is:" + event.target.value);

    }

    handleEndTimeChange(event) {

        this.setState({
            endTime: event.target.value
        });

        console.log("end Time is:" + event.target.value);

    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });

        console.log("location is:" + event.target.value);

    }

    handleClubIdChange(eventKey, event) {
        this.setState({
            clubId: eventKey.target.value
        });

        console.log("clubId is:" + eventKey.target.value);

    }

    handleSubmit(event) {
        this.submitToDatabase();
        event.preventDefault();
    }

    // TO DO:  add the user stuff when sara is done and then also fix my userids that are hardcoded rn
    submitToDatabase() {
        let eventTitle = this.state.title;
        let eventDescription = this.state.description;
        let eventStartTime = this.state.startTime;
        let eventEndTime = this.state.endTime;
        let eventLocation = this.state.location;
        let clubId = this.state.clubId;
        let userId1 = this.state.userId;

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var querystring = require('querystring');
                axios.post('https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/events',
                    querystring.stringify({
                        title: eventTitle,
                        description: eventDescription,
                        startTime: eventStartTime,
                        endTime: eventEndTime,
                        location: eventLocation,
                        clubId: clubId,
                        userId: userId1
                    })).then(res => { console.log(querystring) });

                window.location.href = "/allEvents";
            }
        });
    }
               
    componentDidMount() {
        let currentComponent = this;

        var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/clubs";

        // this is fine if we restrict to users because non-users should not be attempting to create events.
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var uid = user.uid;
                axios
                    .get(
                        hyper
                    ).then(res => {
                        // console.log(res)
                        currentComponent.setState({ clubs: res.data });
                        currentComponent.setState({ userId: uid });
                    })
                    .catch(e => {
                        console.log("Error getting events", e);
                    });
            }
        });
    }

    render() {
        return (
            <div style={Styles.allpage}>
                <Row>
                    <Col >
                        <Navbar />
                    </Col>
                </Row>
                <br />

                <Col sm={{ span: 12, offset: 1 }}>
                    <Card style={Styles.card}>
                        <Row>
                            <Col sm={{ span: 11, offset: 0 }}>
                                <Card.Title style={Styles.titleText}> Create Event </Card.Title>
                                <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="formHost">
                                            <Form.Label>Which club is hosting the event?</Form.Label>
                                            <Form.Control as="select" custom placeholder="ClubHost" value={this.state.clubId} onChange={this.handleClubIdChange}>
                                                {this.state.clubs.map((club, idx) => {
                                                    if (this.state.userId.localeCompare(club.data.userId) === 0) {
                                                        return <option value={club.id} label={club.data.name}></option>
                                                    }
                                                }
                                                )}}
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group controlId="title">
                                            <Form.Label>Event Title</Form.Label>
                                            <Form.Control type="text" placeholder="Event Title" value={this.state.title} onChange={this.handleTitleChange} />
                                        </Form.Group>

                                        <Form.Group controlId="eventDescription">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text" value={this.state.description} onChange={this.handleDescriptionChange} placeholder="This is event is going to show you how to describe your own awesome events." />
                                        </Form.Group>

                                        <Form.Group controlId="startTime">
                                            <Form.Label>Start Time</Form.Label>
                                            <Form.Control type="datetime-local" mode="date" name="timezone" value="-04:00"
                                                value={this.state.startTime} onChange={this.handleStartTimeChange} />
                                        </Form.Group>

                                        <Form.Group controlId="endTime">
                                            <Form.Label>End Time</Form.Label>
                                            <Form.Control type="datetime-local" mode="date" name="timezone" value="-04:00"
                                                value={this.state.endTime} onChange={this.handleEndTimeChange} />
                                        </Form.Group>

                                        <Form.Group controlId="location">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control type="text" value={this.state.location} onChange={this.handleLocationChange} placeholder="BA 201" />
                                        </Form.Group>
                                        <Row>
                                            <Col sm={{ span: 3, offset: 11 }}>
                                                <Button variant="info" type="submit" style={Styles.button}> <b> Submit </b></Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </div>
        );
    }
}


const Styles = {
    allPage: {
        // disables horizontal scrollbar, not working...
        overflowX: "hidden !important"
    },

    card: {
        width: "65rem",
        borderStyle: "solid",
        borderWidth: "1px",
        marginBottom: "3rem"
    },

    titleText: {
        fontSize: "xx-large",
        marginBottom: "2%",
        marginTop: "2%",
        marginLeft: "2%"
    },

    button: {
        width: "7rem",
        marginBottom: "9%",
        fontSize: "small",
        borderRadius: "10px"
    }
};

