import React , {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import SignInModal from './SignInModal';
import CallusModal from './CallusModal';


export default function NavBar() {

  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
 

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
             <Nav.Link href="./getaway"className='navBarstyle links'>GETAWAYS</Nav.Link>
           </Nav>
           <Nav className='nvaBarItemHide'>
          <div>
           <Nav.Link href="#signin"className='navBarstyle3'  onClick={() => setModalShow1(true)}> <i class="fa-solid fa-user"></i>&nbsp;SIGN&nbsp;IN </Nav.Link>
           <SignInModal show={modalShow1} onHide={() => setModalShow1(false)} /> 
           </div>
           <Nav.Link  href="#callus" onClick={() => setModalShow2(true)}> <button className='navBarbutton'> CALL&nbsp;US </button> </Nav.Link>
           <CallusModal show={modalShow2} onHide={() => setModalShow2(false)} /> 
         </Nav>
         <div className='nvaBarItemShow'>
          <br></br>
            <Nav.Link ><button className='navBarbutton' >whatsapp</button> <button className='navBarbutton'>Phone </button></Nav.Link>
          
            </div>
        </Navbar.Collapse> 
      </Container>
    </Navbar>

  )
}
