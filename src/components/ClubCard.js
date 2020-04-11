import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from 'react-bootstrap';
import clubPic from "../icons/knighthacks-team.jpg"


export default class ClubCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            coverImage: '',
            description: ''
        }
    };

    render() {
        console.log(this.props)
        return (
            <div>
                <Card style={Styles.card}>
                    <Card.Img src={this.props.coverImage} style={Styles.clubPic} />
                    <Card.Body>
                        <Card.Title style={Styles.titleText}><b>{this.props.name}</b></Card.Title>
                        <Card.Text style={Styles.bodyText}>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            )
    }
}

const Styles = {
    card: {
        width: "16rem",
        borderRadius: "15px",
        margin: "0.5rem"
    },

    bodyText: {
        fontSize: "small"
    },

    titleText: {
        fontSize: "medium"
    },

    clubPic: {
        height: "8rem",
        borderRadius: "15px 15px 0px 0px"
    }
};