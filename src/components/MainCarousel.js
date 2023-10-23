import React from 'react'
import cover1 from '../assets/cover_1_c.jpg'
import cover2 from '../assets/cover_2_b.jpg'
import cover3 from '../assets/cover_3_b.jpg'
import cover4 from '../assets/cover_4_b.jpg'
import cover5 from '../assets/cover_5_b.jpg'
import cover6 from '../assets/cover_6_b.jpg'
import Carousel from 'react-bootstrap/Carousel';

export default function MainCarousel() {

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
     
    <Carousel touch responsive={responsive} >

    <Carousel.Item >
      <img src={cover1} className='HomeSlider ' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover2} className='HomeSlider' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover3} className='HomeSlider' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover4} className='HomeSlider' style={{minHeight:"100vh"}} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover5} className='HomeSlider' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
    <Carousel.Item >
      <img src={cover6} className='HomeSlider w-100' style={{ minHeight: "100vh" }} alt='' />
    </Carousel.Item>
  </Carousel>
  )
}
