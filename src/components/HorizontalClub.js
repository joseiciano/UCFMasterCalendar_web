import React from 'react';
import { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';
import clubPic from "../icons/knighthacks-team.jpg"

export default class HorizontalEvent extends Component {

    constructor(props) {
        super(props);

        // To DO: add the club fields for the modal once the get club is figured out
        this.state = {
            coverImage: '',
            description: '',
            email: '',
            facebook: '',
            instagram: '',
            meetingInfo: '',
            name: '',
            other: '',
            twitter: '',
            userId: '',
            website: ''
        }
    };

    render() {
        return (
            <Card style={Styles.card}>
                <Row>
                    <Col lg={{ span: 3, offset: 0 }}>
                        <Card.Img src={this.props.coverImage} style={Styles.clubPicture} fluid />
                    </Col>

                    <Col sm={{ span: 9, offset: 0 }}>
                        <Card.Title style={Styles.name}> <br />{this.props.name} </Card.Title>
                        <br />

                        <Row>
                            <Col sm={{ span: 11, offset: 1 }}>
                                {/* <Card.Text style={Styles.description}> <br/> <b>  Description </b> </Card.Text> */}
                                <br/>
                                <br/>
                                <br/>
                                <Card.Text style={Styles.description}> {this.props.description} </Card.Text>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={{ span: 2, offset: 8 }}>
                                <Meeting meetingInfo={this.props.meetingInfo}/>
                            </Col>

                            <Col sm={{ span: 2, offset: 0 }}>
                                <Example website={this.props.website}
                                email={this.props.email}
                                twitter={this.props.twitter}
                                other={this.props.other}
                                facebook={this.props.facebook}
                                instagram={this.props.instagram}/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Card>
        )
    }
}

const Meeting = (props) => {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <Button variant="outline-info" style={Styles.buttonMeetingInfo} onClick={() => setSmShow(true)}>Meetings</Button> {' '}
            <Modal
                size="med"
                show={smShow}
                onHide={() => setSmShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Header id="example-modal-sizes-title-sm" style={Styles.header}>
                        <b> Meeting Information </b>
                    </Modal.Header>
                </Modal.Header>

                <Row>
                    <Col sm={{ span: 3, offset: 1 }}>
                        <Modal.Body style={Styles.bodyHeaders}>{props.meetingInfo}</Modal.Body>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}

const Example = (props) => {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <Button variant="outline-info" style={Styles.buttonContact} onClick={() => setSmShow(true)}>Contact</Button> {' '}
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
                        <Modal.Body style={Styles.links}><a href={props.website}> {props.website} </a></Modal.Body>
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

    clubPicture: {
        width: "140%",
        height: "100%",
        left: "10%",
    },

    description: {
        marginLeft: "3%",
        marginRight: "2%"
    },

    buttonMeetingInfo: {
        width: "5rem",
        height: "2rem",
        fontSize: "small",
        marginBottom: "6%",
        marginTop: "2%",
        borderRadius: "10px",
        marginLeft: "50%",
    },

    buttonContact: {
        width: "5rem",
        height: "2rem",
        fontSize: "small",
        marginBottom: "6%",
        marginTop: "2%",
        borderRadius: "10px",
        marginLeft: "15%"
    },

    location: {
        paddingTop: "1.5%",
    },

    name: {
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
    }

};