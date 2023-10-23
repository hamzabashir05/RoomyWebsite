import React from 'react'
import { Card } from 'react-bootstrap'
import offer2 from '../assets/offers_img_2.png'
import offerArrow from '../assets/offers_arrow.png'
import { Col, Row } from 'react-bootstrap'
import offer from '../assets/offers.png'
import offer1 from '../assets/faysal_bank.png'

export default function Card2() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Card className='cardStyle ' > 
<Card.Body >
    <Row responsive={responsive} >
       <Col sm={1} xs={0}></Col>
        <Col sm={4} xs={4}>
        <Card.Title className='offerMaintext d-flex align-items-center'>  See&nbsp;the  <img src={offer2} className='w-25  img-fluid' alt='' /> </Card.Title>  
    <Card.Title className='offerMaintext'>offers & deals <img src={offerArrow} className=' w-25 img-fluid' alt=''/> </Card.Title>
    <Card.Text className='offerText1'> Hurry up! Book your room now & unlock <br></br>new memories with us.</Card.Text>
        </Col>
        <Col sm={2} xs={3} className='my-auto'> 
        <img src={offer}  className='offerStyle img-fluid' alt='' />
        <Card.Text className='offerText'> Summer End Deal</Card.Text>
        </Col>
        <Col sm={2} xs={3} className='my-auto'>
        <img src={offer1} className='offerStyle img-fluid' alt='' />
        <Card.Text className='offerText'>Faysal Bank Deals</Card.Text>
        </Col>
        <Col sm={3} xs={0}></Col>
    </Row>
   
</Card.Body>


    </Card>
  )
}
