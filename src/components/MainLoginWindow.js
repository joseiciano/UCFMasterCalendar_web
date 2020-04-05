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
                                    <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
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
        left: "10%",
        position: "relative",
        fontFamily: "Arial",
        fontSize: "xxx-large",
    },

    formFields: {
        top: "20%",
        left: "10%",
        position: "relative",
        fontFamily: "Arial",
        
    }

};
