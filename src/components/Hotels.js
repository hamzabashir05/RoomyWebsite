import React from 'react'
import HotelCarousel from './HotelCarousel'
import Card4 from './Card4'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import NavBar from './NavBar'




export default function Hotels() {
  return (
    <Container>
        <>
        <NavBar/>
        </>
       
  <>
     <HotelCarousel/>
  </>

    <Card4/>
    <Footer/>




    
    </Container>
  )
}
