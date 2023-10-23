import React from 'react'
import NavBar from './NavBar';
import MainText from './MainText';
import './style.css';


import { Container, } from 'react-bootstrap'

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

import MainCarousel from './MainCarousel';


export default function Home() {

 

  return (
    <Container fluid className='px-0 position-relative'>

      <NavBar />
     
      <FloatingButtons/>
      <MainText />
     
      <MainCarousel/>
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
