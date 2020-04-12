import React, { Component } from "react";
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
            location: ''
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
        const handleSubmit = () => {
            console.log('submit');
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
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formHost">
                                            <Form.Label>Which club is hosting the event?</Form.Label>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                                    Choose Club
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    {this.state.clubs.map(club => (
                                                        <Dropdown.Item id={club.data.id}>{club.data.name}</Dropdown.Item>
                                                    ))}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>

                                        <Form.Group controlId="title">
                                            <Form.Label>Event Title</Form.Label>
                                            <Form.Control type="text" placeholder="Event Title" />
                                        </Form.Group>

                                        <Form.Group controlId="eventDescription">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text" placeholder="This is event is going to show you how to describe your own awesome events." />
                                        </Form.Group>

                                        <Form.Group controlId="startTime">
                                            <Form.Label>Start Time</Form.Label>
                                            <Form.Control type="datetime-local" placeholder="March 26 2020" />
                                        </Form.Group>

                                        <Form.Group controlId="endTime">
                                            <Form.Label>End Time</Form.Label>
                                            <Form.Control type="datetime-local" placeholder="March 27 2020" />
                                        </Form.Group>

                                        <Form.Group controlId="location">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control type="text" placeholder="BA 201" />
                                        </Form.Group>
                                        <Row>
                                            <Col sm={{ span: 3, offset: 11 }}>
                                                <Button variant="info" style={Styles.button}> <b> Submit </b></Button>
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
