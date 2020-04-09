import React from 'react';
import { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button, Image, Modal } from 'react-bootstrap';
import eventPic from '../icons/eventPic.png';
import clock from '../icons/clockHorizontal.png';
import pin from "../icons/pinHorizontal.png";

import firebase from 'firebase';
import axios from 'axios';
import querystring from 'querystring';

export default class HorizontalEvent extends Component {
    render() {
        return (
            <Card style={Styles.card}>
                <Row>
                    <Col lg={{ span: 3, offset: 0 }}>
                        <Card.Img src={eventPic} style={Styles.eventPicture} fluid />
                    </Col>


                    <Col sm={{ span: 9, offset: 0 }}>

                        <Card.Title style={Styles.title}> <br />React Fundamentals: Introduction to React </Card.Title>
                        <Card.Subtitle style={Styles.title}> Hosted by <b> Knight Hacks </b> </Card.Subtitle>
                        <br />


                        <Row>
                            <Col sm={{ span: 1, offset: 0 }}>
                                <Card.Img src={clock} style={Styles.clock} />
                            </Col>

                            <Col sm={{ span: 11, offset: 0 }}>
                                <Card.Text> Wednesday, February 20th, 2020 <br />
                                    5:30PM to 8:30 PM <br /> </Card.Text>
                            </Col>

                        </Row>

                        <Row>
                            <Col sm={{ span: 1, offset: 0 }}>
                                <Card.Img src={pin} style={Styles.pin} />
                            </Col>

                            <Col sm={{ span: 11, offset: 0 }}>
                                <Card.Text style={Styles.location}> HEC 450 </Card.Text>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={{ span: 6, offset: 10 }}>
                                <Example/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Card>
        )
    }
}

function Example() {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <Button variant="outline-info" style={Styles.button} onClick={() => setSmShow(true)}>Contact</Button> {' '}
               <Modal
                size="med"
                show={smShow}
                onHide={() => setSmShow(false)}
                //aria-labelledby="example-modal-sizes-title-sm"
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
                        <Modal.Body style={Styles.links}><a href="http://knighthacks.org"> http://knighthacks.org/ </a></Modal.Body>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}>Social Media: </Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}><a href="http://instagram.com/knighthacks/"> http://instagram.com/knighthacks/ </a></Modal.Body>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}></Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}><a href="http://facebook.com/knighthacks/"> http://facebook.com/knighthacks/ </a></Modal.Body>
                     </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}></Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}><a href="http://twitter.com/knighthacks/"> http://twitter.com/knighthacks/ </a></Modal.Body>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}>Email: </Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}><a href="mailto:team@knighthacks.org"> team@knighthacks.org </a></Modal.Body>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Modal.Body style={Styles.socialHeader}>Other:</Modal.Body>
                    </Col>

                    <Col sm={{ span: 5, offset: 0 }}>
                        <Modal.Body style={Styles.links}><a href="http://slack.com/knighthacks/"> http://slack.com/knighthacks/ </a></Modal.Body>
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
        width: "105%",
        height: "100%",
        left: "10%",
    },

    clock: {
        width: "110%",
        height: "80%",
        marginTop: "10%"
        //border: "1px solid #021a40",
    },

    pin: {
        width: "100%",
        height: "80%",
        //border: "1px solid #021a40"
    },

    button: {
        width: "5rem",
        height: "2rem",
        fontSize: "small",
        marginBottom: "2%",
        borderRadius: "10px",
        marginLeft: "2.5%"
    },

    location: {
        paddingTop: "1.5%"
    },

    title: {
        marginLeft: "2%"
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
    }

};


