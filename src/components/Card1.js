import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import main2 from '../assets/main2.jpg'

export default function Card1() {
  return (
    <Container>
    <Row className='mt-5'>

    <Col md={1} sm={1}> </Col>
    <Col md={5} sm={6} >
    <img  src={main2} style={{width:"100%",height:"100%"}} className='sliderImageStyle' alt='' />
    </Col>
    <Col md={5} sm={5}>
    <div  className='mainText2'>TRAVEL LIKE <br/> NEVER BEFORE  </div>
    
    <div className='longText'> Short trip to Islamabad or an adventure up north – book Roomy Hotels at your favorite locations. We understand that travel is personal so we make it an easy, feel-good hotel experience for everyone. </div>
   
   <Button className='tryUsBtn'>Try Us Out!</Button>
   <Col md={1} sm={0}> </Col>
    </Col>
  
</Row>
</Container>
  )
}
