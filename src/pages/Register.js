import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import dude from "../icons/dude.png"
import headertxt from "../icons/hText.PNG"

// Imports for authentication
import * as firebase from "firebase/app";
import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //  username: '',
            email: '',
            password: ''
        };

        //   this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        this.loginWithEmailAndPassword();
        event.preventDefault();
    }

    loginWithEmailAndPassword() {
        // let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                window.location.href = "/Main";
            })
            .catch(error => {
                console.log('error logging in user', error);
                var confirmation = window.confirm("Login Information Invalid, Please Try Again ");
            });
    }

    render() {
        return (
            <div style={Styles.backdrop}>
                <Container>
                    <Card style={Styles.mainWindow} responsive >
                        <Row>
                            <Col xs={6} md={5}>
                                <Image src={headertxt} style={Styles.headerText} fluid />
                                <Card.Text style={Styles.formFields} responsive>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group as={Col} md="10" controlId="validationFormik05" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} md="10" controlId="validationFormik05" controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button style={Styles.btn} type="submit">Login</Button>
                                        <Row>
                                            <Col sm={{ span: 8, offset: 2 }}>
                                            <Button style={Styles.btn2} size="sm" variant="" onClick={navigateSignUp}>Need an account? Sign up</Button>
                                            </Col> 
                                        </Row>
                                            
                                        <Row>
                                            <Col sm={{ span: 8, offset: 2 }}>
                                                <Button style={Styles.btn2} size="sm" variant="">Forgot Password?</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Img src={dude} style={Styles.dude} fluid />
                            </Col>
                        </Row>
                    </Card>
                </Container>

            </div>
        )
    }
}

const navigateSignUp = () => {
    window.location.href = "/register";
};

const Styles = {
    backdrop: {
        // Positioning
        position: "fixed",
        overflowX: "hidden",

        // Display
        width: "100%",
        height: "100%",

        // Color
        background:
            "linear-gradient(90deg, rgba(162,224,221,1) 34%, rgba(160,241,237,1) 71%, rgba(221,255,255,1) 100%)"
    },

    mainWindow: {
        position: "relative",
        marginTop: 50,
        marginBottom: 50,
        borderRadius: "50px 50px 50px 50px",
        borderStyle: "none",
        boxShadow: "1.5px 1.5px #E6E6E6",

    },

    dude: {
        height: "100%",
        maxWidth: "100%",
        borderRadius: "50px 50px 50px 50px"
    },

    headerText: {
        top: "20%",
        left: "12%",
        bottom: "-120px",
        position: "relative",
    },

    formFields: {
        top: "20%",
        left: "10%",
        position: "relative",
        fontFamily: "Arial",

    },

    btn: {
        position: "relative",
        left: "20%",
        bottom: "-10px",
        borderRadius: "50px 50px 50px 50px",

        // Color
        border: "1px solid white",
        color: "white",
        background:
            "linear-gradient(90deg, rgba(72,218,238,1) 0%, rgba(126,210,217,1) 43%, rgba(176,252,252,1) 91%)"
    },

    btn2: {
        position: "relative",
        marginLeft: "-2rem",
        bottom: "-45px",
        marginTop: "-1rem"
    },

    btn3: {
        position: "relative",
        left: "19%",
        bottom: "-40px",
    },

};