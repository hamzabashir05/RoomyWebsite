import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default function Maintext3() {
  return (
    <div className='position-absolute top-0 start-0 w-100 ' style={{ zIndex: "1", marginTop: "250px" }}>
    <Container className='flex-container'>
    <Row>
        <Col className='mainPagetext ' lg={6} md={7}>
            <div> <br/>
            EVENTS AT ROOMY 
          <h5>BANQUET HALL | BOARDROOMS | RESTAURANTS | ROOFTOP</h5>
           </div>
        </Col>
        <Col lg={6} md={5} className='hide-on-small-screen' >
          
        </Col>
    </Row>
</Container>
      
    </div>

  )
}
