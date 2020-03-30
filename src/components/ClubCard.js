import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import clubPic from "../icons/knighthacks-team.jpg"


export default class ClubCard extends Component {
    render() {
        return (
            <div>
                <Card style={Styles.card}>
                    <Card.Img src={clubPic} style={Styles.clubPic} />
                    <Card.Body>
                        <Card.Title style={Styles.titleText}><b>Knight Hacks</b></Card.Title>
                        <Card.Text style={Styles.bodyText}>
                            The goal of Knight Hacks is to develop computer science...
                         </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            )
    }
}

const Styles = {
    card: {
        width: "14rem",
    },

    bodyText: {
        fontSize: "small"
    },

    titleText: {
        fontSize: "medium"
    },

    clubPic: {
        height: "8rem"
    }
};