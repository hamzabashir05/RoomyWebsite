import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cover7 from '../assets/cover_1_b.jpg'
import cover8 from '../assets/cover_2_b (1).jpg'
import cover9 from '../assets/cover_3_b (1).jpg'
import cover10 from '../assets/cover_4_b (1).jpg'
import cover11 from '../assets/cover_5_b (1).jpg'
import cover12 from '../assets/cover_6_b (1).jpg'


export default function HotelCarousel() {
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
    <Carousel touch keyboard responsive={responsive} >

    <Carousel.Item >
      <img src={cover7} className='HomeSlider ' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover8} className='HomeSlider' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover9} className='HomeSlider' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover10} className='HomeSlider' style={{minHeight:"100vh"}} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover11} className='HomeSlider' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover12} className='HomeSlider' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
  </Carousel>
  )
}
