import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import HorizontalEvent from "../components/HorizontalEvent";
import * as firebase from "firebase/app";
import axios from "axios";

// To DO: image should be club image.

export default class AllEvents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: []
        };

    };

    componentDidMount() {
        let currentComponent = this;

            var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/events";

            axios
                .get(
                    hyper
            ).then(res => {
                console.log(res)
                    currentComponent.setState({ events: res.data });
                })
                .catch(e => {
                    console.log("Error getting events", e);
                });

        

        // now get the club, do this after brian creates
    /*
        var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/getClub" + this.clubId + "/" ;

            axios
                .get(
                    hyper
                )
                .then(res => {
                    currentComponent.setState({ clubName : res.data });
                })
                .catch(e => {
                    console.log("Error getting club", e);
                });
    */
    }

    render() {

        return (
            <div style={Styles.allpage}>
                <Row>
                    <Col >
                        <Navbar/>
                    </Col>
                </Row>
                <br />
                

                <Row>
                    <Col sm={{ span: 6, offset: 1 }}>
                        <p style={Styles.title}> <b> Events </b> </p>
                    </Col>

                    <Col sm={{ span: 4, offset: 1 }}>
                        <Button variant="outline-info" style={Styles.button} onClick={navigateCreateEvent}> Create New Event </Button>
                    </Col>

                </Row>
               
                {this.state.events.map(event => (
                    <Row>
                    <Col sm={{ span: 11, offset: 1 }}>
                            <HorizontalEvent key={event.data.id} title={event.data.title} host={event.data.host} location={event.data.location} description={event.data.description} />
                    </Col>
                    </Row>
                            ))}
                
            </div>
        );
    }  
}

const navigateCreateEvent = () => {
    window.location.href = "/createEvent";
};

const Styles = {
    allPage: {
        // disables horizontal scrollbar
        overflowX: "hidden !important",
    },

    title: {
        fontSize: "x-Large"
    },

    button: {
        width: "8rem",
        height: "2rem",
        fontSize: "small",
        borderRadius: "10px",
        marginLeft: "28%",
        marginBottom: "-5%"
    }
};