import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cover13 from '../assets/banner_desktop_2.jpg'
import cover14 from '../assets/banner_desktop_3.jpg'
import cover15 from '../assets/banner_desktop_4.jpg'
import cover16 from '../assets/banner_desktop_5.jpg'
import cover17 from '../assets/banner_desktop_6.jpg'
import cover18 from '../assets/banner_desktop_7.jpg'

export default function EventsCarousel() {

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
          <img src={cover13} className='HomeSlider ' style={{ maxHeight: "100vh" }} alt='' />
        </Carousel.Item>
        <Carousel.Item >
          <img src={cover14} className='HomeSlider' style={{ maxHeight: "100vh" }} alt='' />
        </Carousel.Item>
        <Carousel.Item >
          <img src={cover15} className='HomeSlider' style={{ maxHeight: "100vh" }} alt='' />
        </Carousel.Item>
        <Carousel.Item >
          <img src={cover16} className='HomeSlider' style={{maxHeight:"100vh"}} alt='' />
        </Carousel.Item>
        <Carousel.Item >
          <img src={cover17} className='HomeSlider' style={{ maxHeight: "100vh" }} alt='' />
        </Carousel.Item>
        <Carousel.Item >
          <img src={cover18} className='HomeSlider' style={{ maxHeight: "100vh" }} alt='' />
        </Carousel.Item>
      </Carousel>
      )
    }
