import React from 'react';
import { Component, useState, Text, Input, TextInput } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button, Modal, Form, Dropdown } from 'react-bootstrap';
import clock from '../icons/clockHorizontal.png';
import pin from "../icons/pinHorizontal.png";
import trashcan from "../icons/trashcan.png";

import firebase from 'firebase';
import axios from 'axios';

export default class HorizontalEvent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showEditFields: false,
            title: '',
            host: '',
            clubId: '',
            startTime: '',
            endTime: '',
            date: '',
            location: '',
            description: '',
            email: '',
            coverImage: '',
            facebook: '',
            instagram: '',
            meetingInfo: '',
            other: '',
            twitter: '',
            website: ''
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateStartTime = this.updateStartTime.bind(this);
        this.updateEndTime = this.updateEndTime.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
    }

    updateTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    updateStartTime(event) {
        this.setState({
            startTime: event.target.value
        });
    }

    updateEndTime(event) {
        this.setState({
            endTime: event.target.value
        });
    }

    updateDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    updateLocation(event) {
        this.setState({
            location: event.target.value
        });
    }

    toggleEdit() {
        this.setState(state => ({ showEditFields: !state.showEditFields }));
    }

    componentDidMount() {
        let currentComponent = this;

        // This stuff if for the contact modal info, getting the clubs info
        var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/clubs/" + this.props.clubId + "/";
        axios
            .get(
                hyper
            )
            .then(res => {
                console.log(res.data.data.name);
                console.log("email is:" + res.data.data.email);
                currentComponent.setState({
                    host: res.data.data.name,
                    email: res.data.data.email,
                    coverImage: res.data.data.coverImage,
                    facebook: res.data.data.facebook,
                    instagram: res.data.data.instagram,
                    meetingInfo: res.data.data.meetingInfo,
                    other: res.data.data.other,
                    twitter: res.data.data.twitter,
                    website: res.data.data.website
                });
            })
            .catch(e => {
                console.log("Error getting club", e);
            });

    }

    deleteEvent(eventId, title) {
        // check if user is signed in
        //firebase.auth().onAuthStateChanged(function (user) {
        //    if (user) {
        // User is signed in, use their uid for getting their contacts
        //var uid = user.uid;
        var confirmation = window.confirm("Are you sure you want to delete the " + title + " event?");

        if (confirmation == true) {
            var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/events/" + eventId;
            console.log('Event Id we are trying to delete: ' + eventId);
            axios
                .delete(
                    hyper
                )
                .then(res => {
                    // refresh page if successful delete
                    window.location = '/allEvents';
                })
                .catch(e => {
                    console.log("Error deleting event", e);
                });
        }

        window.location.href = "/allEvents";
        //}
        //});
    }


    render() {
        return (
            <Card style={Styles.card}>
                <Row>
                    <Col lg={{ span: 3, offset: 0 }}>
                        <Card.Img src={this.state.coverImage} style={Styles.eventPicture} fluid />
                    </Col>

                    <Col sm={{ span: 9, offset: 0 }}>
                        <Row>
                            <Col sm={{ span: 9, offset: 0 }}>
                                <Card.Subtitle style={Styles.blueDate}> <br />{this.props.startDate}{this.props.endDate} </Card.Subtitle>
                            </Col>
                        </Row>
                        <Card.Title style={Styles.title}> <br />{this.props.title} </Card.Title>
                        <Card.Subtitle style={Styles.title}> Hosted by <b> {this.state.host}</b> </Card.Subtitle>
                        <br />

                        <Row>
                            <Col sm={{ span: 1, offset: 1 }}>
                                <Card.Img src={clock} style={Styles.clock} />
                            </Col>

                            <Col sm={{ span: 10, offset: 0 }}>
                                <Card.Text Style={Styles.text}> Starts at: {this.props.startTime} <br />
                                    Ends at: {this.props.endTime} <br /> </Card.Text>
                            </Col>

                        </Row>

                        <Row>
                            <Col sm={{ span: 1, offset: 1 }}>
                                <Card.Img src={pin} style={Styles.pin} />
                            </Col>

                            <Col sm={{ span: 9, offset: 0 }}>
                                <Card.Text style={Styles.location}> {this.props.location} </Card.Text>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={{ span: 11, offset: 1 }}>
                                <Card.Text style={Styles.description}> <br /> <b>  Description </b> </Card.Text>
                                <Card.Text style={Styles.description}> {this.props.description} </Card.Text>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={{ span: 2, offset: 10 }}>
                                <Example website={this.state.website}
                                    email={this.state.email}
                                    twitter={this.state.twitter}
                                    other={this.state.other}
                                    facebook={this.state.facebook}
                                    instagram={this.state.instagram}
                                />
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Card>
        )
    }
}

const Example = (props) => {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <Button variant="outline-info" style={Styles.button} onClick={() => setSmShow(true)}>Contact</Button> {' '}
            <Modal
                size="med"
                show={smShow}
                onHide={() => setSmShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Header id="example-modal-sizes-title-sm" style={Styles.header}>
                        <b> Contact Information </b>
                    </Modal.Header>
                </Modal.Header>

                <Row>
                    <Col sm={{ span: 3, offset: 1 }}>
                        <Modal.Body style={Styles.bodyHeaders}>Website: </Modal.Body>
                    </Col>

                    <Col sm={{ span: 2, offset: 0 }}>
                        <Modal.Body style={Styles.links}><a href={props.website}> {props.website}</a></Modal.Body>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}>Instagram: </Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}><a href={props.instagram}> {props.instagram} </a></Modal.Body>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}>Facebook: </Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}><a href={props.facebook}> {props.facebook} </a></Modal.Body>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}>Twitter: </Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}><a href={props.twitter}> {props.twitter} </a></Modal.Body>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}>Email: </Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}>{props.email}</Modal.Body>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}>Other:</Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}> {props.other} </Modal.Body>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}


const Styles = {

    card: {
        width: "63rem",
        height: "auto",
        marginBottom: "2%"
    },

    eventPicture: {
        width: "140%",
        height: "100%",
        left: "10%",
    },

    clock: {
        width: "110%",
        height: "80%",
        marginTop: "10%",
        marginLeft: "10%"
    },

    pin: {
        width: "100%",
        height: "80%",
        marginLeft: "10%"
    },

    description: {
        marginLeft: "3%",
        marginRight: "2%"
    },

    button: {
        width: "5rem",
        height: "2rem",
        fontSize: "small",
        marginBottom: "6%",
        marginTop: "2%",
        borderRadius: "10px",
        marginLeft: "15%"
    },

    buttonUpdate: {
        width: "5rem",
        height: "2rem",
        fontSize: "small",
        marginBottom: "6%",
        marginTop: "2%",
        borderRadius: "10px",
        marginLeft: "50%",
    },

    location: {
        paddingTop: "1.5%",
    },

    title: {
        marginLeft: "11%"
    },

    header: {
        fontSize: "large",
        marginBottom: "-15%",
        border: "none",
    },

    bodyHeaders: {
        font: "arial",
        fontWeight: "bold",
        left: "-20%",
        fontSize: "small"
    },

    socialHeader: {
        font: "arial",
        fontWeight: "bold",
        left: "-15%",
        fontSize: "small",
    },

    links: {
        position: "relative",
        marginLeft: "-40%",
        fontSize: "small"
    },

    text: {
        marginLeft: "30%"
    },

    blueDate: {
        color: "#17A2B8",
        marginLeft: "5rem",
        marginBottom: "-1rem"
    },

    trashButton: {
        width: "3.3rem",
        height: "3rem",
        marginLeft: "3rem"
    },

    modalCard: {
        width: "45rem",
        height: "auto",
        marginBottom: "2%",
        borderColor: "#17A2B8",
        marginLeft: "2%"
    },

    trashImage: {
        width: "100%",
        height: "100%"
    },

    inputFields: {
        width: "80%"
    }

};


