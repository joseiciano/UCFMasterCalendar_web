import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import HorizontalEvent from "../components/HorizontalEvent";
import RestrictedHorizontalEvent from "../components/RestrictedHorizontalEvent"
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


export default class AllEvents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            userId: ''
        };

    };

    componentDidMount() {
        let currentComponent = this;

            var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/events";
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var uid = user.uid;
                axios
                    .get(
                        hyper
                    ).then(res => {
                        console.log(res)
                        currentComponent.setState({ events: res.data });
                        currentComponent.setState({ userId: uid });
                    })
                    .catch(e => {
                        console.log("Error getting events", e);
                    });
            }
            else {
                axios
                    .get(
                        hyper
                    ).then(res => {
                        console.log(res)
                        currentComponent.setState({ events: res.data });
                        currentComponent.setState({ userId: 'u8LGaBZMGOgI5scFL1oFc6n52a927' });
                    })
                    .catch(e => {
                        console.log("Error getting events", e);
                    });
            }
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
                        if (idx !== -128) {
                            let startString = event.data.startTime;
                            let endString = event.data.endTime;

                            let startDateObj = new Date(startString);
                            let endDateObj = new Date(endString);

                            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

                            let fullEndDate = endDateObj.toLocaleDateString(undefined, options);
                            let fullStartDate = startDateObj.toLocaleDateString(undefined, options);
                            let updatePlaceholder = fullEndDate;
                            

                            if (fullEndDate === fullStartDate) {
                                fullEndDate = "";
                            }

                            else {
                                fullEndDate = " - " + fullEndDate;
                            }

                            let startTime = startDateObj.toLocaleTimeString('en-US');
                            let endTime = endDateObj.toLocaleTimeString('en-US');
                            if (this.state.userId.localeCompare(event.data.userId) === 0) {
                                return <Row>
                                    <Col sm={{ span: 11, offset: 1 }}>
                                        <HorizontalEvent updatePlaceholder={updatePlaceholder} id={event.id} title={event.data.title} location={event.data.location} description={event.data.description} startTime={startTime} startDate={fullStartDate} endDate={fullEndDate} endTime={endTime} clubId={event.data.clubId} />
                                    </Col>
                                </Row>
                            }

                            else {
                                return <Row>
                                    <Col sm={{ span: 11, offset: 1 }}>
                                        <RestrictedHorizontalEvent updatePlaceholder={updatePlaceholder} id={event.id} title={event.data.title} location={event.data.location} description={event.data.description} startTime={startTime} startDate={fullStartDate} endDate={fullEndDate} endTime={endTime} clubId={event.data.clubId} />
                                    </Col>
                                </Row>
                            }
                            
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