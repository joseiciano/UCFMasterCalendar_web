import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col, Button } from 'react-bootstrap';
import ClubCard from "../components/ClubCard";
import * as firebase from "firebase/app";
import axios from "axios";

export default class ClubList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clubs: [],
            //clubName: ""
        };

    };

    componentDidMount() {
        let currentComponent = this;

        var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/clubs";

        axios
            .get(
                hyper
            ).then(res => {
                currentComponent.setState({ clubs: res.data });
            })
            .catch(e => {
                console.log("Error getting events", e);
            });
    }


    render() {
        return (
            <Card style={Styles.card}>
                <Row>
                    <Col sm={{ span: 6, offset: 0 }}>
                        <Card.Text> <b> Technology Clubs </b> </Card.Text>
                    </Col>

                    <Col sm={{ span: 2, offset: 2 }}>
                        <Button style={Styles.button}> <b>See all </b></Button>
                    </Col>
                </Row>

                <Row>
                    <Col lg={{ span: 5, offset: 0 }}>
                        <Card.Text style={Styles.subtitle}> Learn about UCF's technology community. </Card.Text>
                    </Col>
                </Row>

                <Row>
                    {
                        this.state.clubs.map((club, idx) => {
                            if (idx < 3) {
                                return <ClubCard key={club.id} name={club.data.name} description={club.data.description} coverImage={club.data.coverImage} />
                            }
                        })
                    }
                    
                </Row>
            </Card>
        )
    }
}

const Styles = {
    card: {
        width: "67rem",
        border: "none",
    },

    subtitle: {
        fontSize: "small",
    },

    button: {
        fontSize: "small",
        width: "74%",
        height: "87%",
        border: "none",
        backgroundColor: "white",
        color: "#1C8D9B",
    }
};