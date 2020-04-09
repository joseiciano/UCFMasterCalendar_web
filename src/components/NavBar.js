import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';

export default class MainNavbar extends Component {

    render(){
        return(
            <Container fluid style={styles.container}>
                <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet" />

                <Col>
                    <Navbar bg="light" variant="light">
                        {/*? Possibily will have to change home to Main because that is the component name?*/}
                        {/*? OR WILL have to put #url! that seems like the best option right now*/}
                        <Col sm={{span: 3, offset: 0}}>
                            <Navbar.Brand style={styles.knightro} > Knightro </Navbar.Brand>
                        </Col>

                        <Row >
                            <Nav className="NavOptions">
                           
                                <Col sm={{ span: 2, offset: 8 }}>
                                        <Nav.Link href="#Main" style={styles.center}> Home </Nav.Link>
                                </Col>
                                
                                <Col lg={{ span: 7, offset: 0 }}>
                                        <Nav.Link href="#Clubs" style={styles.center}> Clubs </Nav.Link>
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

const navigateLogin = () => {
    window.location.href = "/login";
};

const navigateSignup = () => {
    window.location.href = "/register";
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

