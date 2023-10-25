import React from 'react'
import NavBar from './NavBar'
import { Container } from 'react-bootstrap'
import Maintext3 from './Maintext3'
import EventsCarousel from './EventsCarousel'
import Card4 from './Card4'
import Footer from './Footer'
import ContactUs from './ContactUs'
import EventsOptions from './EventsOptions'



export default function EventsDineIn() {
  return (
    <Container fluid className='px-0 position-relative' >
      <>
        <NavBar />
      </>
      <>
        <Maintext3 />
      </>
      <>
        <EventsCarousel />
      </>
      <>
        <EventsOptions />
      </>

<br></br>
<br></br>
      <ContactUs />
      <Card4 />
      <Footer />
    </Container>
  )
}
