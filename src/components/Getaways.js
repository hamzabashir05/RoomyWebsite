import React from 'react'
import { Container } from 'react-bootstrap'
import GetawaysCarousel from './GetawaysCarousel'
import NavBar from './NavBar'
import Card4 from './Card4'
import Footer from './Footer'
import MainText4 from './MainText4'
import GetawayOption1 from './GetawayOption1'
import GetawayOption2 from './GetawayOption2'
import GetawayReason from './GetawayReason'
export default function Getaways() {
  return (
    <Container fluid className='px-0 position-relative' >
        
         <NavBar/>
         <GetawaysCarousel/>
        <MainText4/>
         <GetawayOption1/>
         <br/>
        <GetawayOption2/>
        <GetawayReason/>
       <Card4/>
       <Footer/>
        </Container>
  )
}
