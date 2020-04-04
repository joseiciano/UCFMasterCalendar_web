import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Image, Row, Col } from 'react-bootstrap';
import heartPic from "../icons/techHeart.png"

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <Col lg={{span: 10, offset: 1}} responsive>
                        <Card style={styles.wCard} responsive >
                            <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"/>
                            
                <Row>
                            
                            <Col sm={{ span: 5, offset: 1 }}>
                                <Card.Text style={styles.headerText} responsive>
                                    <br/>
                                <b> Something for
                                <br />  Everyone </b>

                            </Card.Text>

                            <Card.Text style={styles.bodyText} responsive>
                                Just bring an open mind and an insatiable desire <br /> 
                                to learn, and we'll take care of the rest. Create <br />
                                something, learn new skills, and have fun with <br />
                                friends old and new.
                             </Card.Text>

                        </Col>

                        <Col sm={{ span: 5, offset: 1 }}>
                            <Card.Img src={heartPic} style={styles.hearty} fluid />
                        </Col>
            </Row>
            </Card>
            </Col>
            
            </div>
        )
    }
}

const styles = {
    wCard: {
            position: "realtive",
            backgroundColor:  "#D0F5F7",
            color: "#1C8D9B",
            borderRadius: "50px 50px 50px 50px",
            borderStyle: "none",
            boxShadow: "1.5px 1.5px #E6E6E6"
        },
                        
    hearty: {
        height: "100%",
        maxWidth: "100%",
        borderRadius: "50px 50px 50px 50px",
    },

    bodyText: {
        top: "-10%",
        position: "relative",
        fontFamily: "Quicksand",
        fontSize: "medium",
    },

    headerText: {
        top: "-4%",
        position: "relative",
        fontFamily: "Arial",
        fontSize: "xx-large",
    }
};