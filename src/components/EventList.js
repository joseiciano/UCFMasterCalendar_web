import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import EventCard from "../components/EventCard";
import * as firebase from "firebase/app";
import axios from "axios";

export default class EventList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            //clubName: ""
        };

    };

    componentDidMount() {
        let currentComponent = this;

        var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/events";

        axios
            .get(
                hyper
            ).then(res => {
                // console.log(res)
                currentComponent.setState({ events: res.data });
            })
            .catch(e => {
                console.log("Error getting events", e);
            });



        // now get the club, to do
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
        //this.state.events.map(event => {
        //    console.log(event)
        //    // console.log(event.data.location)
        //    return <EventCard title={event.data.title} host={event.data.host} startTime={event.data.startTime} location={event.data.location} />
        //})

        return (
            <Card style={Styles.card}>
                <Row>
                    <Col sm={{ span: 3, offset: 0 }}>
                        <Card.Text> <b> Upcoming Events </b> </Card.Text>
                    </Col>

                    <Col sm={{ span: 2, offset: 3 }} >
                        <Button style={Styles.button} onClick={navigateCreateEvent}> <b>Create Event </b></Button>
                    </Col>

                    <Col sm={{ span: 2, offset: 0 }} >
                        <Button style={Styles.button} onClick={navigateAllEvents}> <b>See all </b></Button>
                    </Col>
                </Row>

                <Row>
                    <Col lg={{ span: 5, offset: 0 }}>
                        <Card.Text style={Styles.subtitle}> See what's happening soon in your area. </Card.Text>
                    </Col>
                    
               </Row>

                <Row>
                    {
                        this.state.events.map((event, idx) => {
                            if (idx < 3) {
                                return <EventCard title={event.data.title} location={event.data.location}  />
                            }
                        })
                    }
                </Row>
            </Card>
        )

        
    }
}

const navigateAllEvents= () => {
    window.location.href = "/allEvents";
};

const navigateCreateEvent = () => {
    window.location.href = "/createEvent";
};

const Styles = {
    card: {
        width: "67rem",
        border: "none",
    },

    subtitle: {
        fontSize: "small",
        //color: "#7C7C7C"
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
