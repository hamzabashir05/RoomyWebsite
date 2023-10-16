import React from 'react'
import { Row, Col, Container, Card } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import popupImage from '../assets/landscape_desktop.png';
import baner from '../assets/banner_desktop.png';
import Overlay from 'react-bootstrap/Overlay';
import { useState, useRef } from 'react';

export default function Booking() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (

        <Container className='show-on-small-screen bookingStyle'>

            <div >
                <img src={baner} className='w-100' alt='' ref={target} onClick={() => setShow(!show)} />
                <Overlay target={target.current} show={show} placement="top">
                    <div>
                        <img src={popupImage} className='w-50 h-50 ' alt='' />
                    </div>
                </Overlay>
            </div>

            <Dropdown className='mt-4' drop="start">
                <Dropdown.Toggle className=" dropdown">
                    <h6 className="text-dark"> Location </h6>
                    <p className="text-dark"> Where are you going ?</p>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdownlist">
                    <Dropdown.Item href="#/action-1">Batakundi</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Chitral</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Kalam</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Hunza</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Nathia Gali</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">MURREE</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Thandiyani</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Islamabad</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Row>

                <Col sm={6} xs={6}>

                    <Dropdown className="bookingStyleItems" drop="start">
                        <Dropdown.Toggle className="dropdown">
                            <h6 className="text-dark"> Check-In/Check-out </h6>
                            <p className="text-dark">Add Dates</p>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col sm={6} xs={6}>
                    <Dropdown className="bookingStyleItems" drop="start">
                        <Dropdown.Toggle className="dropdown">
                            <h6 className="text-dark"> No Of Rooms</h6>
                            <p className="text-dark">Add Rooms</p>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

            </Row>

            <Card >
                <Card.Body className='bookingStyleItem'>
                    Check Availability <i class="fa-solid fa-magnifying-glass"></i>
                </Card.Body>
            </Card>

        </Container>

    )
}
