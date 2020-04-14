import React from 'react';
import { Component, useState, Text, Input, TextInput } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button, Modal, Form, Dropdown } from 'react-bootstrap';
import trashcan from "../icons/trashcan.png";

import firebase from 'firebase';
import axios from 'axios';

export default class RestrictedHorizontalClub extends Component {
    constructor(props) {
        super(props);

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

        this.updateCoverImage = this.updateCoverImage.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateFacebook = this.updateFacebook.bind(this);
        this.updateInstagram = this.updateInstagram.bind(this);
        this.updateMeetingInfo = this.updateMeetingInfo.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateOther = this.updateOther.bind(this);
        this.updateTwitter = this.updateTwitter.bind(this);
        this.updateWebsite = this.updateWebsite.bind(this);
    }

    updateCoverImage(club) {
        this.setState({
            coverImage: club.target.value
        });
    }

    updateDescription(club) {
        this.setState({
            description: club.target.value
        });
    }

    updateEmail(club) {
        this.setState({
            email: club.target.value
        });
    }

    updateFacebook(club) {
        this.setState({
            facebook: club.target.value
        });
    }

    updateInstagram(club) {
        this.setState({
            instagram: club.target.value
        });
    }

    updateMeetingInfo(club) {
        this.setState({
            meetingInfo: club.target.value
        });
    }

    updateName(club) {
        this.setState({
            name: club.target.value
        });
    }

    updateOther(club) {
        this.setState({
            other: club.target.value
        });
    }

    updateTwitter(club) {
        this.setState({
            twitter: club.target.value
        });
    }

    updateWebsite(club) {
        this.setState({
            website: club.target.value
        });
    }

    deleteClub(userId, name) {
        // check if user is signed in
        //firebase.auth().onAuthStateChanged(function (user) {
        //    if (user) {
                // User is signed in, use their uid for getting their contacts
                //var uid = user.uid;
                var confirmation = window.confirm("Are you sure you want to delete the " + name + " club?");

                if (confirmation == true) {
                    var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/clubs/" + userId;
                    axios
                        .delete(
                            hyper
                        )
                        .then(res => {
                            window.location = '/AllClubs';
                        })
                        .catch(e => {
                            console.log("Error deleting club", e);
                        });
                }
            //}
        //});
    }

    render() {
        return (
            <Card style={Styles.card}>
                <Row>
                    <Col lg={{ span: 3, offset: 0 }}>
                        <Card.Img src={this.props.coverImage} style={Styles.clubPicture} fluid />
                    </Col>

                    <Col sm={{ span: 9, offset: 0 }}>
                        <Row>
                            <Col sm={{ span: 1, offset: 1 }}>
                                {/* <button class="btn btn-default" style={Styles.trashButton} onClick={() => { this.deleteEvent(this.props.id, this.props.name) }}></button> */}
                                <Button variant="outline-info" style={Styles.trashButton} onClick={() => { this.deleteClub(this.props.id, this.props.name) }}>Delete</Button>
                            </Col>

                            <Col sm={{ span: 1, offset: 0 }}>
                                <EditModal id={this.props.id} name={this.props.name} meetingInfo={this.props.meetingInfo} other={this.props.other} twitter={this.props.twitter}
                                    description={this.props.description} userId={this.props.userId} website={this.props.website} instagram={this.props.instagram}
                                    facebook={this.props.facebook} email={this.props.email}/>
                            </Col>
                        </Row>

                        <Card.Title style={Styles.name}> <br />{this.props.name} </Card.Title>
                        <br />

                        <Row>
                            <Col sm={{ span: 11, offset: 1 }}>
                                <Card.Text style={Styles.description}> <br/> <b>Description</b> </Card.Text>
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

class EditModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // coverImage: '',
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

        // this.updateCoverImage = this.updateCoverImage.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFacebookChange = this.handleFacebookChange.bind(this);
        this.handleInstagramChange = this.handleInstagramChange.bind(this);
        this.handleMeetingInfoChange = this.handleMeetingInfoChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleOtherChange = this.handleOtherChange.bind(this);
        this.handleTwitterChange = this.handleTwitterChange.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleCoverImageChange(club) {
    //     this.setState({
    //         coverImage: club.target.value
    //     });
    // }

    handleDescriptionChange(club) {
        this.setState({
            description: club.target.value
        });
    }

    handleEmailChange(club) {
        this.setState({
            email: club.target.value
        });
    }

    handleFacebookChange(club) {
        this.setState({
            facebook: club.target.value
        });
    }

    handleInstagramChange(club) {
        this.setState({
            instagram: club.target.value
        });
    }

    handleMeetingInfoChange(club) {
        this.setState({
            meetingInfo: club.target.value
        });
    }

    handleNameChange(club) {
        this.setState({
            name: club.target.value
        });
    }

    handleOtherChange(club) {
        this.setState({
            other: club.target.value
        });
    }

    handleTwitterChange(club) {
        this.setState({
            twitter: club.target.value
        });
    }

    handleWebsiteChange(club) {
        this.setState({
            website: club.target.value
        });
    }

    handleSubmit(club) {
        this.submitToDatabase(club);
        club.preventDefault();
    }

    // To do add the user stuff when sara is done and then also fix my user that are hardcoded rn
    submitToDatabase() {
        var querystring = require('querystring');

        axios.put('https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/clubs/' + this.props.id,
            querystring.stringify({
                name: this.state.name,
                description: this.state.description,
                coverImage: this.state.coverImage,
                meetingInfo: this.state.meetingInfo,
                email: this.state.email,
                website: this.state.website,
                facebook: this.state.facebook,
                instagram: this.state.instagram,
                twitter: this.state.twitter,
                other: this.state.other,
                userId: this.props.userId
            })).then(res => { console.log(querystring) });

        window.location.href = "/AllClubs";
    }
   
    render() {
    return (
        <div>
            <Button variant="outline-info" style={Styles.editButton} onClick={() => this.setState({lgShow: true})}>Edit</Button>
            <Modal
                size="lg"
                show={this.state.lgShow}
                onHide={() => this.setState({ lgShow: false })}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title class='modal-title w-100 text-center' style={Styles.modalTitle} id="example-modal-sizes-title-lg">
                        <b> Edit Club </b>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Col sm={{ span: 8, offset: 0 }}>
                        <Card style={Styles.modalCard}>
                            <Row>
                                <Col sm={{ span: 11, offset: 0 }}>
                                    <Card.Body>
                                        <Form onSubmit={this.handleSubmit}>

                                            {/* <Form.Group controlId="name">
                                                <Form.Label>New Cover Image</Form.Label>
                                                <Form.Control type="text" placeholder={this.props.coverImage} onChange={this.handleCoverImageChange} value={this.state.coverImage}  />
                                            </Form.Group> */}

                                            <Form.Group controlId="name">
                                                <Form.Label>New Club Name</Form.Label>
                                                <Form.Control type="text" placeholder={this.props.name} onChange={this.handleNameChange} value={this.state.name}  />
                                            </Form.Group>

                                            <Form.Group controlId="description">
                                                <Form.Label>New Description</Form.Label>
                                                <Form.Control type="text" placeholder={this.props.description} onChange={this.handleDescriptionChange} value={this.state.description}/>
                                            </Form.Group>

                                            <Form.Group controlId="email">
                                                <Form.Label>New Email</Form.Label>
                                                <Form.Control type="text" value={this.state.email}  mode="date" placeholder={this.props.email} onChange={this.handleEmailChange}/>
                                            </Form.Group>

                                            <Form.Group controlId="facebook">
                                                <Form.Label>New Facebook</Form.Label>
                                                <Form.Control type="text" mode="date" value={this.state.facebook} placeholder={this.props.facebook} onChange={this.handleFacebookChange}/>
                                            </Form.Group>

                                            <Form.Group controlId="instagram">
                                                <Form.Label>New Instagram</Form.Label>
                                                <Form.Control type="text" value={this.state.instagram} onChange={this.handleInstagramChange} placeholder={this.props.instagram} />
                                            </Form.Group>

                                            <Form.Group controlId="meetingInfo">
                                                <Form.Label>New Meeting Information</Form.Label>
                                                <Form.Control type="text" value={this.state.meetingInfo} onChange={this.handleMeetingInfoChange} placeholder={this.props.meetingInfo} />
                                            </Form.Group>

                                            <Form.Group controlId="other">
                                                <Form.Label>New additional information</Form.Label>
                                                <Form.Control type="text" value={this.state.other} onChange={this.handleOtherChange} placeholder={this.props.other} />
                                            </Form.Group>

                                            <Form.Group controlId="twitter">
                                                <Form.Label>New Twitter</Form.Label>
                                                <Form.Control type="text" value={this.state.twitter} onChange={this.handleTwitterChange} placeholder={this.props.twitter} />
                                            </Form.Group>

                                            <Form.Group controlId="website">
                                                <Form.Label>New Website</Form.Label>
                                                <Form.Control type="text" value={this.state.website} onChange={this.handleWebsiteChange} placeholder={this.props.website} />
                                            </Form.Group>

                                            <Row>
                                                <Col sm={{ span: 3, offset: 10 }}>
                                                    <Button variant="info" type="submit" style={Styles.button}> <b> Submit </b></Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Modal.Body>
            </Modal>
        </div>
        );
    }
    
}

const Meeting = (props) => {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <Button variant="outline-info" style={Styles.buttonMeetings} onClick={() => setSmShow(true)}>Meetings</Button> {' '}
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

    name: {
        marginLeft: "11%",
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

    buttonMeetings: {
        width: "5rem",
        height: "2rem",
        fontSize: "small",
        marginBottom: "6%",
        marginTop: "2%",
        borderRadius: "10px",
        marginLeft: "50%",
    },

    editButton: {
        width: "5rem",
        height: "2rem",
        fontSize: "small",
        borderRadius: "10px",
        marginLeft: "1265%", 
        marginTop: "15%"
    },

    trashButton: {
        width: "5rem",
        height: "2rem",
        fontSize: "small",
        borderRadius: "10px",
        marginLeft: "1718%", 
        marginTop: "15%"
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