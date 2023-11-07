import React from 'react'
import { Container } from 'react-bootstrap'
import r1 from '../assets/top_reasons_1.jpg'
import r2 from '../assets/top_reasons_2.jpg'
import r3 from '../assets/top_reasons_3.jpg'
import r4 from '../assets/top_reasons_4.jpg'
import Carousel from 'react-bootstrap/Carousel';



export default function GetawayReason() {

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
          breakpoint: { max: 1024, min: 550 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 550, min: 0 },
          items: 1
        }
      };
   
  return (

    <Container>
        <div className='dineIn'>
        #WHAT YOU’RE IN FOR
    </div>
    <Carousel fade keyboard responsive={responsive} >

    <Carousel.Item >
    <div  className='eventStyle1'>
      <div>
      <p className='mainText2'>IMMERSE IN THE <br/>CULTURE OF KALASH <br></br>VALLEY</p>
      <p className='longText'>A one-hour drive from Hindukush Sarai, the Kalash Valley is a popular tourist attraction for explorers from all around the world owing to the unique culture and traditions of its inhabitants, the Kalash people.</p>
  </div>
      <img src={r1} className='eventOptionsImg' alt='' />
      </div>
      </Carousel.Item>
      <Carousel.Item >
    <div  className='eventStyle1'>
      <div>
      <p className='mainText2'>NEW DESTINATIONS</p>
      <p className='longText'>Take a drive down to see the scenic views of <br/>Garam Chashma or enjoy the biodiversity that <br/> Gol National Park has to offer.</p>

  </div>
      <img src={r2} className='eventOptionsImg' alt='' />
      </div>
      </Carousel.Item>
      <Carousel.Item >
    <div  className='eventStyle1'>
      <div>
      <p className='mainText2'>THE BEST THAT THE<br/> NORTH HAS TO <br/>OFFER!</p>
      <p className='longText'>Take a quick hike up to the Rakaposhi Viewpoint, or enjoy a peaceful walk in the village or visit the majestic cricket ground of Nagar valley.</p>

  </div>
      <img src={r2} className='eventOptionsImg' alt='' />
      </div>
      </Carousel.Item>
      <Carousel.Item >
    <div  className='eventStyle1'>
      <div>
      <p className='mainText2'>EXPLORE LIKE<br/> NEVER BEFORE</p>
      <p className='longText'>A 10-minute drive to Attabad Lake or a 15-minute drive from Roomy Gulmit, Ghulkin is a village in Hunza Valley famously known for “Ghulkin Glacier”. Go for a morning walk under the shade of mulberry trees or spend the evening eating warm apricot cake.</p>

  </div>
      <img src={r2} className='eventOptionsImg' alt='' />
      </div>
      </Carousel.Item>
      </Carousel>
      </Container>
  )
}
