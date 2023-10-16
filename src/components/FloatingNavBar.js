
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';

export default function FloatingNavBar() {
    const [isFloating, setIsFloating] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsFloating(true);
        } else {
          setIsFloating(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <Nav className= {`hide-on-small-screen floating-nav ${isFloating ? 'floating' : ''}`}>
        
             <Nav.Link href="#Home" className='navBarstyle links'>HOME</Nav.Link>
             <Nav.Link href="#Hotels"className='navBarstyle links' >HOTELS</Nav.Link>
             <Nav.Link href="#Events&Dine"className='navBarstyle links'>EVENTS&nbsp;&&nbsp;DINE&nbsp;IN</Nav.Link>
             <Nav.Link href="#Getaways"className='navBarstyle links'>GETAWAYS</Nav.Link>
             <Nav.Link href="#signin"className='navBarstyle links'> SIGN&nbsp;IN</Nav.Link>
  </Nav>
  )
}
