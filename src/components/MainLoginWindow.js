import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import dude from "../icons/dude.png"



export default class Welcome extends Component {
    render() 
    {
        return (
            <div>
                <Container>
                    <Card style={Styles.mainWindow} responsive >  
                        <Row>
                        <Col xs={6} md={5}>
                            <Card.Text style={Styles.headerText} responsive>
                                <b> Knightro </b>
                            </Card.Text>
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
                                    <Button style={Styles.btn} type="submit">Sign in your account</Button>
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
        position: "relative",
        fontFamily: "Arial",
        fontSize: "xxx-large",
        color: "linear-gradient(90deg, rgba(75,195,163,1) 16%, rgba(124,203,209,1) 43%, rgba(139,242,242,1) 81%)",

    },

    formFields: {
        top: "20%",
        left: "10%",
        position: "relative",
        fontFamily: "Arial",
        
    },

    btn: {
        position: "relative",
        left: "10%",
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
        left: "-30%",
        bottom: "-45px",
    },

    btn3: {
        position: "relative",
        left: "8.5%",
        bottom: "-40px",
    },
};
