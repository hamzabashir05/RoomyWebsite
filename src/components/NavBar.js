import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'


export default function NavBar() {
  
  return (
    

    <Navbar collapseOnSelect expand="lg" className=' position-absolute w-100 ' style={{zIndex:"1"}}>
      <Container className='m-2 me-auto mw-100 '>
        <Navbar.Brand href="#home">
        <img src={logo} className='w-50 h-50' alt='' /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " className='bg-light' />
        <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav  className='me-auto '>
             <Nav.Link href="#Home" className='navBarstyle links'>HOME</Nav.Link>
             <Nav.Link href="#Hotels"className='navBarstyle links' >HOTELS</Nav.Link>
             <Nav.Link href="#Events&Dine"className='navBarstyle links'>EVENTS&nbsp;&&nbsp;DINE&nbsp;IN</Nav.Link>
             <Nav.Link href="#Getaways"className='navBarstyle links'>GETAWAYS</Nav.Link>
           </Nav>
           <Nav>
           <Nav.Link href="#signin"className='navBarstyle3'> <i class="fa-solid fa-user"></i> SIGN&nbsp;IN</Nav.Link>
           <Nav.Link  href="#callus"> <button className='navBarbutton'> CALL&nbsp;US </button> </Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
