import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './NavBar';
import MainText from './MainText';
import './style.css';


import { Container, } from 'react-bootstrap'
import cover1 from '../assets/cover_1_c.jpg'
import cover2 from '../assets/cover_2_b.jpg'
import cover3 from '../assets/cover_3_b.jpg'
import cover4 from '../assets/cover_4_b.jpg'
import cover5 from '../assets/cover_5_b.jpg'
import cover6 from '../assets/cover_6_b.jpg'
import Slider2 from './Slider2';
import Slider from './Slider';
import Card2 from './Card2';
import Card3 from './Card3';
import ContactUs from './ContactUs';
import Card4 from './Card4';
import Footer from './Footer';
import Card1 from './Card1';
import Booking from './Booking';
import FloatingButtons from './FloatingButtons';
import FloatingNavBar from './FloatingNavBar';
import SideBar from './SideBar';

export default function Home() {

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
    <Container fluid className='px-0 position-relative'>

      <NavBar />
     
      <FloatingButtons/>
      <MainText />
      
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

      < >
        <Booking />
      </>
      <>
      <FloatingNavBar />
    </>
      <>
        <Card1 />
      </>

      <>
        <Slider />
      </>
      <>
        <Slider2 />
      </>
      <>
        <Card2 />
      </>
      <>
        <Card3 />
      </>
      <>
        <ContactUs />
      </>
      <>
        <Card4 />
      </>
      <>
        <Footer />
      </>
    </Container>
  )
}
