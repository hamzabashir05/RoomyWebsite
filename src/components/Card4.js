import React from 'react'
import {Row,Col,Container,Tab,ListGroup , Carousel} from 'react-bootstrap'
import p1 from '../assets/unilever_desktop.png';
import p2 from '../assets/hum_desktop.png'
import p3 from '../assets/nando_desktop.png'
import p4 from '../assets/kfc_desktop.png'
import p5 from '../assets/giz_desktop.png'
import p6 from '../assets/abacus_desktop.png'
import p7 from '../assets/linkdin_1.png'
import p8 from '../assets/linkdin_2.png'
import p9 from '../assets/linkdin_3.png'
import r1 from '../assets/review1.jpg'
import r2 from '../assets/review2.jpg'
import r3 from '../assets/review3.jpg'
import r4 from '../assets/review4.jpg'
import r5 from '../assets/review5.jpg'
import r6 from '../assets/review6.jpg'
import r7 from '../assets/review7.jpg'
import r8 from '../assets/review8.jpg'
import r9 from '../assets/review9.jpg'
import s1 from '../assets/facebook.png'
import s2 from '../assets/whatsapp_desktop.png'
import s3 from '../assets/twitter_desktop.png'
import s4 from '../assets/linkdin.png'
import s5 from '../assets/insta_desktop.png'
import SmallReview from './SmallReview';

export default function Card4() {
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
  <Container flex className='card4syle'>
<Row>
    
    <Col lg={4} xs={7} md={4} className='justify-content: flex-start'>
    <div> 

        <h5 className='listHead'>CUSTOMER REVIEWS</h5>
      <div className='show-on-small-screenReview'>
          <SmallReview/>
      </div>
        <Carousel  responsive={responsive} className='hide-on-small-screenReviews' 
        indicators={true} showArrows={true}>
        <Carousel.Item > 
        <Row  >
            <Col md={3} xs={5}> < img src={r1} className='w-75 ' alt=''/> </Col>
            <Col md={9} xs={7}> 
            <h6 className='reviewName'>Umair Jaswal</h6>
            <text className='reviewstyle'>Overall satisfied with the service and comfort. Rooms were basic but clean and everything was in working order.</text>
            </Col>
        </Row>
        <Row>
            <Col md={3} xs={5}> < img src={r2} className='w-75' alt='' /> </Col>
            <Col md={9}xs={7}>  <h6 className='reviewName'> Humnah Raza</h6>
            <text className='reviewstyle'>Overall satisfied with the service and comfort. Rooms were basic but clean and everything was in working order.</text> </Col>
        </Row>
        <Row>
            <Col md={3} xs={5}> < img src={r3} className='w-75' alt='' /></Col>
            <Col md={9}xs={7}> <h6 className='reviewName'>Eva Zu Bek</h6>
            <text className='reviewstyle'>Overall satisfied with the service and comfort. Rooms were basic but clean and everything was in working order.</text> </Col>
        </Row>
          </Carousel.Item>
            
          <Carousel.Item> 
        <Row>
            <Col md={3} xs={5}> < img src={r7} className='w-75' alt=''/> </Col>
            <Col md={9}xs={7}> 
            <h6 className='reviewName'>Ghazal </h6>
            <text className='reviewstyle'>Overall satisfied with the service and comfort. Rooms were basic but clean and everything was in working order.</text>
            </Col>
        </Row>
        <Row>
            <Col md={3}xs={5}> < img src={r5} className='w-75' alt='' /> </Col>
            <Col md={9}xs={7}>  <h6 className='reviewName'> Aqib</h6>
            <text className='reviewstyle'>Overall satisfied with the service and comfort. Rooms were basic but clean and everything was in working order.</text> </Col>
        </Row>
        <Row>
            <Col md={3} xs={5}> < img src={r6} className='w-75' alt='' /></Col>
            <Col md={9} xs={7}> <h6 className='reviewName'>Chandril</h6>
            <text className='reviewstyle'>Overall satisfied with the service and comfort. Rooms were basic but clean and everything was in working order.</text> </Col>
        </Row>
          </Carousel.Item>
            
          <Carousel.Item> 
        <Row>
            <Col md={3} xs={5}> < img src={r4} className='w-75' alt=''/> </Col>
            <Col md={9} xs={7}> 
            <h6 className='reviewName'>Steve Amy</h6>
            <text className='reviewstyle'>Overall satisfied with the service and comfort. Rooms were basic but clean and everything was in working order.</text>
          
            </Col>
        </Row>
        <Row>
            <Col md={3} xs={5}> < img src={r8} className='w-75' alt='' /> </Col>
            <Col md={9} xs={7}>  <h6 className='reviewName'> Zee Abbas</h6>
            <text className='reviewstyle'>Overall satisfied with the service and comfort. Rooms were basic but clean and everything was in working order.</text> </Col>
        </Row>
        <Row>
            <Col md={3} xs={5}> < img src={r9} className='w-75' alt='' /></Col>
            <Col md={9} xs={7}> <h6 className='reviewName'>Daniel A</h6>
            <text className='reviewstyle'>Overall satisfied with the service and comfort. Rooms were basic but clean and everything was in working order.</text> </Col>
        </Row>
          </Carousel.Item>
        </Carousel>
    </div>
    </Col>
    <Col lg={2} xs={5} md={2} >
    <h5 className='listHead'>MENU</h5>
    <Tab.Container  >
      
          <ListGroup >
            <ListGroup.Item className='border-0 listStyle' action href="#link1">
              ABOUT&nbsp;US
            </ListGroup.Item>
            <ListGroup.Item className='border-0 listStyle' action href="#link2">
              OUR&nbsp;LOCATIONS
            </ListGroup.Item>
            <ListGroup.Item className='border-0 listStyle' action href="#link3">
              DINE&nbsp;IN
            </ListGroup.Item>
            <ListGroup.Item  className='border-0 listStyle'action href="#link4">
              PRIVACY&nbsp;POLICY
            </ListGroup.Item>
            <ListGroup.Item className='border-0 listStyle' action href="#link5">
              TERMS&nbsp;&&nbsp;CONDITIONS
            </ListGroup.Item>
            <ListGroup.Item className='border-0 listStyle' action href="#link6">
              CONTACT&nbsp;US
            </ListGroup.Item>
          </ListGroup>
    
    </Tab.Container>
    
    </Col>
    <Col lg={2} xs={7} md={2} >
        <h5 className='listHead'> JOURNAL</h5>
    <Row>
        <Col md={5} xs={5}> < img src={p7} className='w-100 journalSpacing' alt='' />
        </Col>
        <Col md={7} xs={7}> 
        <p className='reviewstyle'>Informative,&nbsp;Upbeat And&nbsp;Aspirational!  </p> 
        <p className='jouralDate'>15 Feburary</p>
        
        </Col>
    </Row>
    <Row>
        <Col md={5} xs={5}> < img src={p8} className='w-75 journalSpacing' alt='' />
        </Col>
        <Col md={7} xs={7}>  <p className='reviewstyle'>Informative,&nbsp;Upbeat And&nbsp;Aspirational! </p>
        <p className='jouralDate'>15 Feburary</p>
        </Col>
    </Row>
    <Row>
        <Col md={5} xs={5}> < img src={p9} className='w-75 journalSpacing' alt='' />
        </Col>
        <Col md={7} xs={7}>  <p className='reviewstyle'>Informative,&nbsp;Upbeat And&nbsp;Aspirational!</p>
        <p className='jouralDate'>15 Feburary</p>
        </Col>
    </Row>
    </Col>
    <Col lg={4} xs={5} md={4}>

    <h5 className='listHead' > WE&nbsp;ALSOHOST </h5>
      <div className='HostFlex'>
       <div className='row'> 
        < img src={p1} className='HostFlexImg  ' alt='' />
        < img src={p4} className='HostFlexImg ' alt='' />
        < img src={p2} className='HostFlexImg ' alt='' />
        </div> 
        <div className='row'> 
        < img src={p3} className='HostFlexImg ' alt='' />
        < img src={p5} className='HostFlexImg' alt='' />
        < img src={p6} className='HostFlexImg ' alt='' />
        </div>
        </div> 
        <h5 className='listHead2 ' > SOCIAL&nbsp;WITH&nbsp;US </h5>
         <div className='row'> 
            < img src={s1} className='socialImg ' alt='' />
            < img src={s2} className='socialImg ' alt='' />
            < img src={s3} className='socialImg ' alt='' />
            < img src={s4} className='socialImg ' alt='' />
            <img src={s5}  className='socialImg'  alt=''></img>
         </div>

    </Col>
</Row>

  </Container>
  )
}
