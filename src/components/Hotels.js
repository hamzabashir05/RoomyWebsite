import React from 'react'
import HotelCarousel from './HotelCarousel'
import Card4 from './Card4'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import NavBar from './NavBar'
import MainText2 from './MainText2'
import Explore from './Explore'




export default function Hotels() {
  return (
    <Container fluid className='px-0 position-relative' >
        <>
        <NavBar/>
        </>
       <>
       <MainText2/>
       </>
  <>
     <HotelCarousel/>
  </>
  <>
  <Explore/>
  </>

    <Card4/>
    <Footer/>




    
    </Container>
  )
}
