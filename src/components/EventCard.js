import React from 'react';
import { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button, Modal, Image } from 'react-bootstrap';
import pin from "../icons/pin.png";
import clock from "../icons/clockHorizontal.png";
import firebase from 'firebase';
import axios from 'axios';
import eventViewMore from "../pages/EventViewMore.js";


export default class EventCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            host: '',
            date: '',
            start: '',
            end: '',
            location: '',
            clubId: '',
            eventId: '',
            coverImage: '',
            description: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
            email: '',
            other: ''
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
                currentComponent.setState({
                    host: res.data.data.name,
                    coverImage: res.data.data.coverImage,
                    instagram: res.data.data.instagram,
                    facebook: res.data.data.facebook,
                    twitter: res.data.data.twitter,
                    email: res.data.data.email,
                    other: res.data.data.other
                });
            })
            .catch(e => {
                console.log("Error getting club", e);
            });

    }

    render() {
        return (
            <Card style={Styles.card}>
                <Card.Body className="text-left">
                    <Col sm={{ span: 0, offset: 0 }}>
                        <Card.Subtitle style={Styles.dateText}><b><p>{this.props.date}</p></b></Card.Subtitle>
                        <Card.Title style={Styles.eventTitle}><b>{this.props.title}</b></Card.Title>
                        <Card.Text style={Styles.eventHost}>
                            Hosted by <b>{this.state.host} </b>
                        </Card.Text>

                        <Row>
                            <Col sm={{ span: .5, offset: 1 }} />
                            <Card.Img src={pin} style={Styles.pinImage} />
                            <Card.Text style={Styles.locationText}> {this.props.location} </Card.Text>
                        </Row>

                        <Row>
                            <Col sm={{ span: 7, offset: 7 }}>
                                <MoreModal title={this.props.title} date={this.props.date} startTime={this.props.start} host={this.state.host}
                                    coverImage={this.state.coverImage} description={this.props.description} endTime={this.props.end}
                                    location={this.props.location} instagram={this.state.instagram} facebook={this.state.facebook}
                                    email={this.state.email} twitter={this.state.twitter} other={this.state.other} website={this.state.website}
                                />
                            </Col>
                        </Row>

                    </Col>
                </Card.Body>
            </Card>
        )
    }
}


const MoreModal = (props) => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant="outline-info" style={Styles.button} onClick={() => setLgShow(true)}>View More</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title class='modal-title w-100 text-center' style={Styles.modalTitle} id="example-modal-sizes-title-lg">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title style={Styles.date} class="text-center">
                       
                                 {props.date}
                    </Modal.Title>

                    <Modal.Body style={Styles.text} class='text-center'>
                                Hosted by <b> Association for Computing Machinery </b>
                    </Modal.Body>

                    <Modal.Body style={Styles.text} class='text-center'>
                        <Row>
                            <Col sm={{ span: 6, offset: 0 }}>
                                <br />
                                <br />
                                <Image style={Styles.image} src={props.coverImage}/> 
                            </Col>

                            <Col sm={{ span: 5, offset: 0 }}>
                                <br />
                                <br/>
                                <Card style={Styles.leftCard}>
                                    <Row>
                                        <Col sm={{ span: 3, offset: 0 }}>
                                            <Card.Img style={Styles.clock} src={clock} />
                                        </Col>

                                        <Col sm={{ span: 8, offset: 0 }}>
                                            <Card.Text style={Styles.modalTime}> {props.startTime} to {props.endTime} </Card.Text>
                                        </Col>

                                    </Row>

                                    <br />

                                    <Row>
                                        <Col sm={{ span: 2, offset: 1 }}>
                                            <Card.Img style={Styles.pin} src={pin} />
                                        </Col>

                                        <Col sm={{ span: 5, offset: 0 }}>
                                            <Card.Text style={Styles.modalPlace}> {props.location} <br/> </Card.Text>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={{ span: 10, offset: 1 }}>
                                            <Card.Subtitle style={Styles.contactInfo}> <br/> Contact Information <br/> </Card.Subtitle>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={{ span: 4, offset: 0 }}>
                                            <Card.Text style={Styles.contactMethods}> <b>   Website: </b></Card.Text>
                                        </Col>

                                        <Col sm={{ span: 7, offset: 0 }}>
                                            <Card.Text style={Styles.links}> <a href={props.website}> {props.website} </a></Card.Text>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={{ span: 4, offset: 0 }}>
                                            <Card.Text style={Styles.contactMethods}> <b> Instagram: </b> </Card.Text>
                                        </Col>

                                        <Col sm={{ span: 7, offset: 0 }}>
                                            <Card.Text style={Styles.links}> <a href={props.instagram}> {props.instagram} </a></Card.Text>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={{ span: 5, offset: 0 }}>
                                            <Card.Text style={Styles.contactMethods}> <b> Facebook:  </b> </Card.Text>
                                        </Col>

                                        <Col sm={{ span: 6, offset: 0 }}>
                                            <Card.Text style={Styles.links}> <a href={props.facebook}> {props.facebook} </a></Card.Text>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={{ span: 4, offset: 0 }}>
                                            <Card.Text style={Styles.contactMethods}> <b>   Twitter: </b> </Card.Text>
                                        </Col>

                                        <Col sm={{ span: 7, offset: 0 }}>
                                            <Card.Text style={Styles.links}> <a href={props.twitter}> {props.twitter} </a></Card.Text>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col sm={{ span: 4, offset: 0 }}>
                                            <Card.Text style={Styles.contactMethods}> <b> Email:  </b> </Card.Text>
                                        </Col>

                                        <Col sm={{ span: 7, offset: 0 }}>
                                            <Card.Text style={Styles.links}> <a href={props.email}> {props.email} </a></Card.Text>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col sm={{ span: 4, offset: 0 }}>
                                            <Card.Text style={Styles.contactMethods}> <b> Other: </b> </Card.Text>
                                        </Col>

                                        <Col sm={{ span: 7, offset: 0 }}>
                                            <Card.Text style={Styles.other}> <a href={props.other}> {props.other} </a></Card.Text>
                                        </Col>
                                    </Row>


                                </Card>
                            </Col>
                        </Row>
                    </Modal.Body>


                    <Modal.Body style={Styles.text}>
                        <b> Details </b>
                        <br />
                        {props.description}
                    </Modal.Body>

                    
                </Modal.Body>
            </Modal>
        </>
    );
}


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
        fontSize: "x-small",
    },

    date: {
        color: "#1198AB",
        fontSize: "medium",
        //marginLeft: "4.8%"
    },

    host: {
        fontSize: "small",
         marginLeft: "4.8%"
    },

    text: {
        fontSize: "small",
        //marginLeft: "15%",
        color: "#FFFFFFFFF"
    },

    modalTitle: {
        fontSize: "x-large",
        marginLeft:"4.8%"
    },

    pinImage: {
        height: "7%",
        width:"7%"
    },

    image: {
        width: "27rem",
        height: "20rem"
    },

    clock: {
        width: "120%",
        height: "130%",
        marginLeft: "2%",
        marginTop: "4%"
    },

    pin: {
        width: "110%",
        height: "85%",
        marginLeft: "35%"
    },

    modalTime: {
        marginTop: "7%",
        fontSize: "medium"
    },

    modalPlace: {
        marginLeft: "14%",
        marginTop: "7%",
        fontSize: "medium"
    },

    contactInfo: {
        marginLeft: "7%"
    },

    contactMethods: {
        textAlign: "left",
        marginLeft: "5%"
    },

    leftCard: {
        paddingLeft: "2%",
        width: "21rem",
        marginLeft: "2.5rem"
    },

    links: {
        marginLeft: "-4rem"
    },

    other: {
        marginLeft: "-4rem",
        marginBottom: "1rem"
    }
    
};
