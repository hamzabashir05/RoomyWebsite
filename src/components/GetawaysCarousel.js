import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cover19 from '../assets/main_banner_2_desktop.jpg'
import cover20 from '../assets/cover_2_b.jpg'


export default function GetawaysCarousel() {

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
    <Carousel keyboard responsive={responsive} >
    
        <Carousel.Item >
          <img src={cover19} className='HomeSlider ' style={{ maxHeight: "100vh" }} alt='' />
        </Carousel.Item>
        <Carousel.Item >
          <img src={cover20} className='HomeSlider' style={{ maxHeight: "100vh" }} alt='' />
        </Carousel.Item>
      </Carousel>
  )
}
