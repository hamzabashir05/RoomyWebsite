import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import rest1 from '../assets/dinein_1.jpg';
import rest2 from '../assets/dinein_2.jpg';
import rest3 from '../assets/dinein_3.jpg'
import rest4 from '../assets/dinein_4_2.jpg';
import rest5 from '../assets/dinein_5.jpg';
import rest6 from '../assets/dinein_6.jpg';

export default function Slider2() {
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
   <Container >

    <div className='dineIn'>
      DINE-IN
    </div>
    <div className='dineText'>
    Guess what? We have cafes and restaurants too
    </div>
    
<Carousel keyboard responsive={responsive}>
  <div> <img src={rest1} className='slider2Style w-75 h-75' alt='' />
  <div className='restoStyle'>SKY LIGHT</div> 
  <div className='restoDisp'>ROOMY SIGNATURE HOTEL, ISLAMABAD</div>
  </div>
  <div><img src={rest2} className='slider2Style w-75 h-75' alt='' />
  <div className='restoStyle'>THE ROOMY CAFE</div> 
  <div className='restoDisp'>THE ROOMY LODGE, MURREE</div></div>
  <div><img src={rest3} className=' slider2Style w-75 h-75' alt='' />
  <div className='restoStyle'>FARAH'S KITCHEN BY ROOMY</div> 
  <div className='restoDisp'>HINDUKUSH SARAI, CHITRAL</div></div>
  <div><img src={rest4} className=' slider2Style w-75 h-75' alt='' />
  <div className='restoStyle'>BURGERVILLE BY ROOMY</div> 
  <div className='restoDisp'>BATAKUNDI, NARAN VALLEY</div></div>
  <div><img src={rest5} className=' slider2Style w-75 h-75' alt='' />
  <div className='restoStyle'>THE ROOMY CAFE</div> 
  <div className='restoDisp'>KARIMABAD, HUNZA</div></div>
  <div><img src={rest6}className=' slider2Style w-75 h-75'alt='' />
  <div className='restoStyle'>THE ROOMY CAFE</div> 
  <div className='restoDisp'>PESHAWAR, KHYBER PAKHTUNKHWA</div></div>
</Carousel>
   </Container>
   

  )
}
