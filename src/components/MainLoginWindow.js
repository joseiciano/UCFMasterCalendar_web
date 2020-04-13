//import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import dude from "../icons/dude.png"
import headertxt from "../icons/hText.PNG"

// Imports for authentication
import * as firebase from "firebase/app";
//import { AuthContext } from "../components/auth/Auth";
//import AuthForm from "../components/auth/AuthForm";
import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";


export default class MainLoginWindow extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          email: '',
          password: ''
        };
    
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}

handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
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
    this.createAccountEmailAndPassword();
    event.preventDefault();
  }

  createAccountEmailAndPassword() {
    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            user.updateProfile({
              displayName: this.state.username
            })
            .then(() => {
              window.location = '/';
              const username = user.displayName;
              const id = user.uid;
              const email = user.email;
              console.log('User signed up:', username, id, email);
            })
            .catch((e) => {
              console.log(e.code, ' : ', e.message);
            });
          }
        })
      })
      .catch((e) => {
        console.log(e.code, ' : ', e.message);
      });
  }

render() 
{
    return (
        <div>
            <Container>
                <Card style={Styles.mainWindow} responsive >  
                    <Row>
                    <Col xs={6} md={5}>
                        <Image src={headertxt} style={Styles.headerText} fluid/>                        
                        <Card.Text style={Styles.formFields} responsive> 
                            <Form>
                                    <Form.Group as={Col} md="10" controlId="validationFormik05" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="10" controlId="validationFormik05" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                <Button style={Styles.btn} type="submit">Create Account</Button>
                                <Button style={Styles.btn2} variant="" type="submit" size="sm">Have an account? Sign in</Button>
                                <Button style={Styles.btn3} variant="" type="submit" size="sm">Forgot Password?</Button>
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




const Styles = {
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
        left: "-20%",
        bottom: "-45px",
    },

    btn3: {
        position: "relative",
        left: "19%",
        bottom: "-40px",
    },
};
