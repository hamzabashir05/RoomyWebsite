
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import m1 from '../assets/2.jpg'




export default function SignInModal(props) {
  return (
    <Modal  size="xl" {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
    
    </Modal.Header>
    <Modal.Body className="grid-example">
      <Container >
        <Row>
          <Col md={6} className='nvaBarItemHide'>
            
          <img src={m1} className='w-100' alt='' />

          </Col>
          <Col md={6}>
        <div className='hotelText'>
         Sign&nbsp;In
          </div>
          <div className='hotelSubtext'>
          Welcome to Roomy
          </div>
          <br/>
          
<div className='siginImg'>
   <div>
   <i class="fa-brands fa-facebook fa-2xl"></i>
    <p> Sign&nbsp;In&nbsp;with&nbsp;Facebook</p>
    <br/>
    </div>
  <div>
  <i class="fa-brands fa-google fa-2xl"></i>
     <p>  Sign&nbsp;In&nbsp;with&nbsp;Google</p>
     <br/>
 </div> 
    
<div >
<i class="fa-solid fa-arrow-right fa-2xl"></i>
     <p>  Sign&nbsp;In&nbsp;with&nbsp;Google</p>
     <br/>
 </div> 
 <p>Don't have an account? Sign Up</p>
</div>
          </Col>
        </Row>

        
      </Container>
    </Modal.Body>
  </Modal>

  )
}
