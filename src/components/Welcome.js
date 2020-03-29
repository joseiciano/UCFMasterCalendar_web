import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Image, Row, Col } from 'react-bootstrap';
import heartPic from "../icons/techHeart.png"

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <Row responsive>
                    <Col sm={{ span: 8, offset: 0 }} responsive>
                        <Card style={styles.wCard} responsive >
                            <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"/>
                            <Card.Text style={styles.headerText} responsive>
                               
                                <b> Something for
                                  <br/>  Everyone </b>
                             </Card.Text>
                            <Card.Text style={styles.bodyText} responsive>
                                Just bring an open mind and an insatiable desire <br /> 
                                to learn, and we'll take care of the rest. Create <br />
                                something, learn new skills, and have fun with <br />
                                friends old and new.
                             </Card.Text>
                            <Card.Img src={heartPic} style={styles.hearty} responsive />

            </Card>
            </Col>
            
            </Row>
            </div>
        )
    }
}

const styles = {
    wCard: {
            position: "realtive",
            backgroundColor:  "#D0F5F7",
            color: "#1C8D9B",
            fontSize: "250%",
            height: "50%",
            left: "4%",
            width: "144%",
            borderRadius: "50px 50px 50px 50px",
            borderStyle: "none",
            boxShadow: "1.5px 1.5px #E6E6E6",
        },
                        
    hearty: {
        position: "relative",
        width: "40%",
        height: "98.5%",
        right: "-60%",
        borderRadius: "50px 50px 50px 50px",
        top: "-85%"
    },

    bodyText: {
        position: "relative",
        fontFamily: "Quicksand",
        marginLeft: "10%",
        fontSize: "40%",
        top: "7%",
    },

    headerText: {
        position: "relative",
        fontFamily: "Arial",
        marginLeft: "10%",
        fontSize: "75%",
        top: "10%"
    }
};