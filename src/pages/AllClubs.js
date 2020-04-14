import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import HorizontalClub from "../components/HorizontalClub";
import RestrictedHorizontalClub from "../components/RestrictedHorizontalClub";
import axios from "axios";

export default class AllClubs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clubs: []
        };

    };

    componentDidMount() {
        let currentComponent = this;

        var hyper = "https://us-central1-ucf-master-calendar.cloudfunctions.net/webApi/api/v1/clubs";

        axios
            .get(
                hyper
        ).then(res => {
            console.log(res)
                currentComponent.setState({ clubs: res.data });
                currentComponent.setState({ userId: "uAy5Y5uJNFdip5z6zeky"})
            })
            .catch(e => {
                console.log("Error getting clubs", e);
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
                        <p style={Styles.title}> <b> Clubs </b> </p>
                    </Col>

                    <Col sm={{ span: 4, offset: 1 }}>
                        <Button variant="outline-info" style={Styles.button} onClick={navigateCreateClub}> Create New Club </Button>
                    </Col>
                </Row>

                {this.state.clubs.map((club, idx) => {
                    if (idx != -128) {
                        if (this.state.userId === club.data.userId) {
                            return <Row>
                                <Col sm={{ span: 11, offset: 1 }}>
                                    <RestrictedHorizontalClub id={club.id} coverImage={club.data.coverImage} name={club.data.name} meetingInfo={club.data.meetingInfo} other={club.data.other} 
                                            description={club.data.description} userId={club.data.userId} twitter={club.data.twitter}
                                            instagram={club.data.instagram} website={club.data.website} 
                                            facebook={club.data.facebook} email={club.data.email}/>
                                </Col>
                            </Row>
                        }

                        else {
                            return <Row>
                                <Col sm={{ span: 11, offset: 1 }}>
                                    <HorizontalClub id={club.id} coverImage={club.data.coverImage} name={club.data.name} meetingInfo={club.data.meetingInfo} other={club.data.other} 
                                        description={club.data.description} userId={club.data.userId} twitter={club.data.twitter}
                                        instagram={club.data.instagram} website={club.data.website} 
                                        facebook={club.data.facebook} email={club.data.email}/>
                                </Col>
                            </Row>
                        }
                    }
                })}
            </div>
        );
    } 
}

const navigateCreateClub = () => {
    window.location.href = "/createClub";
};

const Styles = {
    allPage: {
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
        marginLeft: "33%",
        marginBottom: "-5%"
    }
};