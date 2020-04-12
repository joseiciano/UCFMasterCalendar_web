import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import EventCard from "../components/EventCard";
import * as firebase from "firebase/app";
import axios from "axios";

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const dateendings = [
    'th',
    'st',
    'nd',
    'rd',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
];



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
                currentComponent.setState({ events: res.data });
            })
            .catch(e => {
                console.log("Error getting events", e);
            });
    }

    render() {
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
                                const start = new Date(event.data.startTime._seconds * 1000);
                                let day = days[start.getDay() - 1];
                                let month = months[start.getMonth() - 1];
                                let year = start.getFullYear();
                                let date = start.getDate();
                                let dateending =
                                    date === '11' || date === '12' ? 'th' : dateendings[date % 10];

                                const startTime = start
                                    .toTimeString()
                                    .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
                                const fullStartDate = `${day}, ${month} ${date}${dateending}, ${year}`;

                                const end = new Date(event.data.endTime._seconds * 1000);
                                day = days[end.getDay() - 1];
                                month = months[end.getMonth() - 1];
                                year = end.getFullYear();
                                date = end.getDate();
                                dateending =
                                    date === '11' || date === '12' ? 'th' : dateendings[date % 10];

                                const endTime = end
                                    .toTimeString()
                                    .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');

                                return <EventCard title={event.data.title} location={event.data.location} eventId={event.id} date={fullStartDate} clubId={event.data.clubId} start={startTime} description={event.data.description} end={endTime}/>
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
