import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import dude from "../icons/dude.png"



export default class Welcome extends Component {
    render() 
    {
        return (
            <div>
                <Container lg={{span: 10, offset: 1}} responsive>>
                    <Card style={Styles.mainWindow} responsive >  
                        <Row>
                        <Col sm={{ span: 5, offset: 1 }}>
                        </Col>
                        <Col sm={{ span: 5, offset: 1 }}>
                        <Card.Img src={dude} style={Styles.dude} fluid />
                        </Col>
                        </Row>
                    </Card>
                </Container>

        </div>
        )
    }
}



const Styles = {
    mainWindow: {
        position: "realtive",
        marginTop: 50,
        marginBottom: 50,
        borderRadius: "50px 50px 50px 50px",
        borderStyle: "none",
        boxShadow: "1.5px 1.5px #E6E6E6",
      },
                        
    dude: {
        height: "100%",
        maxWidth: "100%",
        borderRadius: "50px 50px 50px 50px"
    },

};
