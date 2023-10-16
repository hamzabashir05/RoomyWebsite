import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import fastCheck from '../assets/fast_check_in_desktop_2.png'
import playstore from '../assets/google_play_desktop.jpg'
import appstore from '../assets/app_store_desktop.jpg'
import fastarrow from '../assets/fast_checkin_bot_arrow.png'


export default function Card3() {

  return (
    <Container >
    <Row>   
 <Col  md={6} sm={6}>
  <img src={fastCheck} className='fastChekin w-100 img-fluid' alt='' />
 </Col>
<Col md={6} sm={6}>
<div className='fastCtext'>FAST CHECK IN APP</div>
<div className='fastCtext2'> A Three-Step Feature For A Contactless And Hassle-Free Check-In Process <br></br>Download Our App & Book A Room Now!</div>
<div > 
<img src={playstore} className='fastBtn w-25 h-25 img-fluid' alt='' />
 <img src={appstore} className='fastBtn w-25 h-25 img-fluid' alt='' />
 </div>
 <div> <img src={fastarrow} className=' fastBtn w-25 h-25 img-fluid hide-on-small-screen' alt=''/></div>
</Col>
    </Row>


    </Container>
  )
}
