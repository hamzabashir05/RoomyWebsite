import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'


export default function NavBar() {
  
  return (
    

    <Navbar collapseOnSelect expand="lg" className=' position-absolute w-100 ' style={{zIndex:"3"}} >
      <Container className='m-2 me-auto mw-100 '>
        <Navbar.Brand href="#home">
        <img src={logo} className='w-50' alt=''/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " className='bg-light' />
        <Navbar.Collapse id="responsive-navbar-nav" className='NavBarStyling'> 
        <Nav  className='me-auto '>
          <div className='nvaBarItemShow'>
            <Nav.Link><button className='navBarbutton'>Create Account</button> <button className='navBarbutton'>Sign In</button></Nav.Link>
           <br></br>
            </div>
             <Nav.Link href="./" className='navBarstyle links'>HOME</Nav.Link>
             <Nav.Link href="./hotels"className='navBarstyle links' >HOTELS</Nav.Link>
             <Nav.Link href="./events"className='navBarstyle links'>EVENTS&nbsp;&&nbsp;DINE&nbsp;IN</Nav.Link>
             <Nav.Link href="#Getaways"className='navBarstyle links'>GETAWAYS</Nav.Link>
           </Nav>
           <Nav className='nvaBarItemHide'>
           <Nav.Link href="#signin"className='navBarstyle3'> <i class="fa-solid fa-user"></i>&nbsp;SIGN&nbsp;IN</Nav.Link>
           <Nav.Link  href="#callus"> <button className='navBarbutton'> CALL&nbsp;US </button> </Nav.Link>
         </Nav>
         <div className='nvaBarItemShow'>
          <br></br>
            <Nav.Link><button className='navBarbutton'>whatsapp</button> <button className='navBarbutton'>Phone </button></Nav.Link>
          
            </div>
        </Navbar.Collapse> 
      </Container>
    </Navbar>

  )
}
