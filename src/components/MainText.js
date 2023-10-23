import React from 'react'
import MainCard from './MainCard'
import { Col, Container, Row } from 'react-bootstrap'


export default function MainText() {
    return (
        <div className='position-absolute top-0 start-0 w-100 ' style={{ zIndex: "1", marginTop: "250px" }}>
            <Container className='flex-container'>
            <Row>
                <Col className='mainPagetext ' lg={6} md={7}>
                    <div> <br/>
                     CHECK IN TO THE <br/>
                    TIME OF YOUR LIFE</div>
                </Col>
                <Col lg={6} md={5} className='hide-on-small-screen' >
                   <MainCard/>
                </Col>
            </Row>
        </Container>
        </div>
        
        
        
    )
}
