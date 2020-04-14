import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import React from 'react';
import axios from "axios";
import * as firebase from "firebase/app";
import "firebase/auth";

export default class CreateClub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            coverImage: '',
            meetingInfo: '',
            email: '',
            website: '',
            facebook: '',
            instagram: '',
            twitter: '',
            other: '', 
            userId: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleCoverImageChange = this.handleCoverImageChange.bind(this);
        this.handleMeetingInfoChange = this.handleMeetingInfoChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
        this.handleFacebookChange = this.handleFacebookChange.bind(this);
        this.handleInstagramChange = this.handleInstagramChange.bind(this);
        this.handleTwitterChange = this.handleTwitterChange.bind(this);
        this.handleOtherChange = this.handleOtherChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(club) {
        this.setState({
            name: club.target.value
        });
    }

    handleDescriptionChange(club) {
        this.setState({
            description: club.target.value
        });
    }

    handleCoverImageChange(club) {
        this.setState({
            coverImage: club.target.value
        });
    }

    handleMeetingInfoChange(club) {
        this.setState({
            meetingInfo: club.target.value
        });
    }

    handleEmailChange(club) {
        this.setState({
            email: club.target.value
        });
    }

    handleWebsiteChange(club) {
        this.setState({
            website: club.target.value
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

    handleTwitterChange(club) {
        this.setState({
            twitter: club.target.value
        });
    }

    handleOtherChange(club) {
        this.setState({
            other: club.target.value
        });
    }

    handleSubmit(club) {
        this.submitToDatabase();
        club.preventDefault();
    }

    submitToDatabase() {
        firebase.auth().onAuthStateChanged(user => {
            var uid;
            if (user) {
                var querystring = require('querystring');
                uid = user.uid;
                axios.post('https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/clubs',
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
                        userId: uid
                    })).then(res => { console.log(querystring) });
                }
            });

        window.location.href = "/AllClubs";
}
    
    render() {
        return (
            <div style={Styles.allpage}>
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>

                <br />
                
                <Col sm={{ span: 12, offset: 1 }}>
                    <Card style={Styles.card}>
                        <Row>
                            <Col sm={{ span: 11, offset: 0 }}>
                                <Card.Title style={Styles.titleText}>Create a Club</Card.Title>
                                <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your club's name." value={this.state.name} onChange={this.handleNameChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="description">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text" placeholder="Describe your club." value={this.state.description} onChange={this.handleDescriptionChange}/>
                                        </Form.Group>

                                       <Form.Group controlId="coverimage">
                                            <Form.Label>Cover Image</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your club's cover photo." value={this.state.coverImage} onChange={this.handleCoverImageChange}/>
                                            {/* <Form.Control type="text" placeholder="UNDER CONSTRUCTION." value={this.state.coverImage} onChange={this.handleCoverImageChange}/> */}
                                        </Form.Group>

                                        <Form.Group controlId="meetinginfo">
                                            <Form.Label>Meeting Information</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your club's meeting dates and times." value={this.state.meetingInfo} onChange={this.handleMeetingInfoChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your club's email address." value={this.state.email} onChange={this.handleEmailChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="website">
                                            <Form.Label>Website</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your club's website." value={this.state.website} onChange={this.handleWebsiteChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="facebook">
                                            <Form.Label>Facebook</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your club's Facebook page." value={this.state.handleFacebookChange} onChange={this.handleFacebookChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="instagram">
                                            <Form.Label>Instagram</Form.Label>
                                            <Form.Control type="instagram" placeholder="Enter your club's Instagram page." value={this.state.instagram} onChange={this.handleInstagramChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="twitter">
                                            <Form.Label>Twitter</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your club's Twitter page." value={this.state.twitter} onChange={this.handleTwitterChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="other">
                                            <Form.Label>Other</Form.Label>
                                            <Form.Control type="text" placeholder="Enter any additional information."value={this.state.other} onChange={this.handleOtherChange}/>
                                        </Form.Group>

                                        <Row>
                                            <Button type="submit" variant="outline-primary" style={Styles.button}>Submit</Button>
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
        height: "2.5rem",
        fontSize: "large",
        borderRadius: "10px",
        marginLeft: "1.5%"
    },
};