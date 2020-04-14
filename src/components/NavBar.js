import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';

// TODO: add onclick for clubs, login, signup

export default class MainNavbar extends Component {

    render(){
        return(
            <Container fluid style={styles.container}>
                <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet" />

                <Col>
                    <Navbar bg="light" variant="light">
                        <Col sm={{span: 3, offset: 0}}>
                            <Navbar.Brand style={styles.knightro} onClick={navigateHome} > Knightro </Navbar.Brand>
                        </Col>

                        <Row >
                            <Nav className="NavOptions">
                           
                                <Col sm={{ span: 2, offset: 6 }}>
                                    <Nav.Link href="#Main" style={styles.center} onClick={navigateHome}> Home </Nav.Link>
                                </Col>
                                
                                <Col lg={{ span: 2, offset: 0 }}>
                                    <Nav.Link href="#Clubs" style={styles.center} > Clubs </Nav.Link>
                                </Col>

                                <Col lg={{ span: 2, offset: 0 }}>
                                    <Nav.Link href="#allEvents" style={styles.center} onClick={navigateEvents}> Events </Nav.Link>
                                </Col>
                                
                                <Col lg={{ span: 3, offset: 6}}>

                                    <Nav.Link href="#LogIn" onClick={navigateLogin}> Log in </Nav.Link>
                                </Col>
                                
                                <Col lg={{ span: 4, offset: 0 }}>
                                    <Nav.Link href="#SignUp" onClick={navigateSignup}> Sign Up </Nav.Link>

                                </Col>
                            </Nav>
                        </Row>

                    </Navbar>
                </Col>

            </Container>

        );

    }
    
}

const navigateHome = () => {
    window.location.href = "/Main";
};

const navigateLogin = () => {
    window.location.href = "/login";
};

const navigateSignup = () => {
    window.location.href = "/register";
};

const navigateEvents = () => {
    window.location.href = "/allEvents";
};



const styles = {
    // href is that little badge in the left hand corner that tells you the hyperlink address
    center: {
        fontFamily: "Arial",
        color: "black"                      
    },

    knightro:
    {
            fontFamily: "Pacifico"
    },

    container:
    {
        display: "flex",
        flexDirection: "row",
        flexGrow: "1",
        fontFamily: "Arial"
    }
};

