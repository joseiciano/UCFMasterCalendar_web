import React, { Component } from "react";
import { Row, Col, Button, Card } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import HorizontalEvent from "../components/HorizontalEvent";
import eventPicture from "../icons/eventPic.png";
import clock from "../icons/clockHorizontal.png";
import pin from "../icons/pinHorizontal.png";



export default class EventViewMore extends Component {
    render() {
        return (
            <div style={Styles.allpage}>
                <Row>
                    <Col >
                        <Navbar />
                    </Col>
                </Row>
                <br />

                <Col>
                <Card style={Styles.card}>
                    <Row>
                        <Col sm={{ span: 11, offset: 2 }}>
                            <Card.Text style={Styles.dateText}> Wednesday, February 20, 2020 </Card.Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={{ span: 11, offset: 2 }}>
                            <Card.Title style={Styles.titleText}> React Fundamentals: Intro to React </Card.Title>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={{ span: 11, offset: 2 }}>
                            <Card.Text style={Styles.hostText}> Hosted by <b> Knight Hacks </b> </Card.Text>
                        </Col>
                    </Row>
                </Card>
                </Col>

                <Col>
                <Card style={Styles.card2}>
                    <Row>
                        <Col sm={{ span: 5, offset: 2 }}>
                            <Card.Img src={eventPicture} style={Styles.picture} />
                        </Col>

                        <Col sm={{ span: 4, offset: 1 }}>
                            <Card style={Styles.rightCard}>
                                <Row>
                                    <Col sm={{ span: 2, offset: 0 }}>
                                        <Card.Img src={clock} style={Styles.clock} />
                                    </Col>

                                    <Col sm={{ span: 9, offset: 0 }}>
                                        <Card.Text style={Styles.date}> Wednesday, February 20th, 2020 <br /> 5:30PM to 8:30PM </Card.Text>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={{ span: 2, offset: 0 }}>
                                        <Card.Img src={pin} style={Styles.pin} />
                                    </Col>

                                    <Col sm={{ span: 9, offset: 0 }}>
                                        <Card.Text style={Styles.location}> HEC 450<br /></Card.Text>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={{ span: 3, offset: 8 }}>
                                        <Button variant="outline-info" style={Styles.button} >Contact</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col sm={{ span: 5, offset: 2 }}>
                                <Card.Title style={Styles.details}> Details </Card.Title>
                            <Card.Text style={Styles.descriptionText}> During this workshop you will learn about React.  React is a javascript library that allows you to make dynamic content for a page.  React has less structure than Angular so it can be better for smaller projects.  React also has a wide variety of testing tools that you can utilize.  Start your journey with React during this fun workshop. </Card.Text>
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
        // disables horizontal scrollbar
        overflowX: "hidden",
    },

    card: {
        // disables horizontal scrollbar
        overflowX: "hidden",
        maxWidth: "100%",
        borderStyle: "solid",
        borderWidth: "1px",
    },

    descriptionText: {
        marginBottom: "50%"
    },

    card2: {
        // disables horizontal scrollbar
        overflowX: "hidden",
        maxWidth: "100%",
        backgroundColor: "#F8F9FA",
        height: "100%",
        border:"none"
    },

    details: {
        marginTop: "%"
    },

    clock: {
        width: "120%",
        height: "60%",
        marginLeft: "5%",
        marginTop: "33%",
    },

    location: {
        marginTop: "4%"
    },

    date: {
        marginTop: "3%",
        marginBottom: "5%",
    },

    pin: {
        width: "120%",
        height: "80%",
        marginLeft: "7%"
    },

    rightCard: {
        width: "20rem",
        marginTop: "3%",
        height: "auto"
    },

    dateText: {
        fontSize: "medium",
        marginTop: "2%"
    },

    titleText: {
        fontSize: "x-large",
        marginBottom: "0.5%"

    },

    hostText: {
        fontSize: "small",
        marginBottom: "2%"

    },

    picture: {
        width: "45rem",
        height: "25rem",
        maxWidth: "100%",
        marginTop: "3%"
    },

    button: {
        width: "5rem",
        marginBottom: "9%",
        fontSize: "small",
        borderRadius: "10px"
    }
};