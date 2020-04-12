import React, { Component } from "react";
import { Row, Col, Button, Card } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import eventPicture from "../icons/eventPic.png";
import clock from "../icons/clockHorizontal.png";
import pin from "../icons/pinHorizontal.png";
import vmContent from "../components/VmContent"
import * as firebase from "firebase/app";
import axios from "axios";

export default class EventViewMore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //title: '',
            //host: '',
            //startTime: null,
            //endTime: null,
            //location: '',
            //coverImage: '',
            //description: '',
            eventId: '',
            event: null
        }
    };

    componentDidMount() {
        let currentComponent = this;

        var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/events/:" + this.state.eventId;
        console.log("event id we are trying to get: " + this.state.eventId)
        axios
            .get(
                hyper
            ).then(res => {
                console.log(res)
                currentComponent.setState({ event: res.data });
            })
            .catch(e => {
                console.log("Error getting event", e);
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
        return (
            <div style={Styles.allpage}>
                <Row>
                    <Col >
                        <Navbar />
                    </Col>
                </Row>
                <br />

                <vmContent/>
              
            </div>
        );
    }
}

const Styles = {
    allPage: {
        // disables horizontal scrollbar
        overflowX: "hidden",
    }
};