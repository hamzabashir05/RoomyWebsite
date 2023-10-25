import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
export default function MainText4() {
  return (
    <div className='position-absolute top-0 start-0 w-100 ' style={{ zIndex: "1", marginTop: "250px" }}>
    <Container className='flex-container'>
    <Row>
        <Col className='mainPagetext ' lg={6} md={7}>
            <div> <br/>
            ROOMY GETAWAYS
          <h5>ESCAPE COMPLETELY</h5>
           </div>
        </Col>
        <Col lg={6} md={5} className='hide-on-small-screen' >
          
        </Col>
    </Row>
   </Container>
         
    </div>
  )
}
