import React, { Component, useState } from "react";
import { Row, Col, Form, Card, Dropdown, Button } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import * as firebase from "firebase/app";
import axios from "axios";

// how to store dropdown choice?
export default class CreateEventPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clubs: [],
            host: '',
            title: '',
            description: '',
            location: '',
            startTime: '',
            endTime: ''
        };

    };

    componentDidMount() {
        let currentComponent = this;

        var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/clubs";

        axios
            .get(
                hyper
            ).then(res => {
                // console.log(res)
                currentComponent.setState({ clubs: res.data });
            })
            .catch(e => {
                console.log("Error getting events", e);
            });
    }

    render() {
        return (<FormExample clubs={this.state.clubs} />);
    }

    
}

function FormExample(props) {
    // this was false originally
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        //console.log(event.target.elements.formHost.value)
        //console.log(event.target.elements.eventDescription.value)
        //console.log(event.target.elements.startTime.value)
        //console.log(event.target.elements.endTime.value)

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        ////console.log(document.getElementByID("formHost").value);
        ////console.log(document.getElementByID("formHost").value)


        setValidated(true);
        console.log(event);
        console.log(form);


        //const newinfo = {
        //    title: event.target.elements.title.value,
        //    host: event.target.elements.formHost.value,
        //    description: event.target.elements.eventDescription.value,
        //    startTime: event.target.elements.startTime.value,
        //    endTime: event.target.elements.endTime.value,
        //    location: event.target.elements.location.value
        //};
        //axios
        //    .post(
        //        `https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/events`,
        //        newinfo,
        //    )
        //    .then(res => window.location.href = "/allEvents")
        //    .catch(e => console.log('Error posting to server', e.response));
    };

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
                                <Form noValidate validated={validated} >
                                    <Form.Group controlId="formHost">
                                        <Form.Label>Which club is hosting the event?</Form.Label>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                                Choose Club
                                                </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {props.clubs.map(club => (
                                                    <Dropdown.Item id={club.data.id}>{club.data.name}</Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Form.Group>

                                    <Form.Group controlId="title">
                                        <Form.Label>Event Title</Form.Label>
                                        <Form.Control required type="text" placeholder="Event Title" />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="eventDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control required type="text" placeholder="This is event is going to show you how to describe your own awesome events." />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="startTime">
                                        <Form.Label>Start Time</Form.Label>
                                        <Form.Control type="datetime-local" mode="date" required
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                    </Form.Group>

                                    <Form.Group controlId="endTime">
                                        <Form.Label>End Time</Form.Label>
                                        <Form.Control type="datetime-local" mode="date" required
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                    </Form.Group>

                                    <Form.Group controlId="location">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control type="text" placeholder="BA 201" required />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Row>
                                        <Col sm={{ span: 3, offset: 11 }}>
                                            <Button variant="info" onClick={handleSubmit} style={Styles.button}> <b> Submit </b></Button>
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


//function handleSubmit(title1, description1, startTime1, endTime1, location1) {
//    console.log('submit');
//    console.log(title1);
//    console.log(description1);
//    console.log(location1);
//    console.log(startTime1);
//    console.log(endTime1);

//    //firebase.auth().onAuthStateChanged(function (user) {
//    //    if (user) {
//    //        var uid = user.uid;
//    //        var querystring = require('querystring');
//    //        axios.post('https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/events',
//    //            querystring.stringify({
//    //                title: title1,
//    //                description: description1,
//    //                startTime: startTime1,
//    //                endTime: endTime1,
//    //                userId: uid
//    //            })).then(res => { console.log(uid) });
//    //    }
//    //    else {
//    //        console.log("something went wrong with creating an event");
//    //    }

//    //    window.location.href = "/Main";
//    //});
//};

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
