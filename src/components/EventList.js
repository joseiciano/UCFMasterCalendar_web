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
                                 let startString = event.data.startTime;
                            let endString = event.data.endTime;

                            let DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                            let MonthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"];


                            let startDateObj = new Date(startString);
                            let endDateObj = new Date(endString);

                            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

                            let fullEndDate = endDateObj.toLocaleDateString(undefined, options);
                            let fullStartDate = startDateObj.toLocaleDateString(undefined, options);

                            if (fullEndDate === fullStartDate) {
                                fullEndDate = "";
                            }

                            else {
                                fullEndDate = " - " + fullEndDate;
                            }
                                let startTime = startDateObj.toLocaleTimeString('en-US');
                                let endTime = endDateObj.toLocaleTimeString('en-US');

                                return <EventCard title={event.data.title} location={event.data.location} eventId={event.id} date={fullStartDate} endDate={fullEndDate} clubId={event.data.clubId} start={startTime} description={event.data.description} end={endTime}/>
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
