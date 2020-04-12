import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import HorizontalEvent from "../components/HorizontalEvent";
import * as firebase from "firebase/app";
import axios from "axios";

// To DO: image should be club image.

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


export default class AllEvents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            //array of the club names
            clubs: []
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
                {
                    this.state.events.map((event, idx) => {
                        if (idx != -128) {
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

                            

                            return <Row>
                                <Col sm={{ span: 11, offset: 1 }}>
                                    <HorizontalEvent key={event.data.id} title={event.data.title} location={event.data.location} description={event.data.description} startTime={startTime} date={fullStartDate} endTime={endTime} clubId={event.data.clubId} />
                                </Col>
                            </Row>
                        }
                    })
                }
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