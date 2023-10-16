import React from 'react'
import { Container } from 'react-bootstrap'
import baner from '../assets/banner_desktop.png';
import Overlay from 'react-bootstrap/Overlay';
import { useState, useRef } from 'react';
import popupImage from '../assets/landscape_desktop.png';


export default function Banner() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  return (
    <Container>

<div className='mt-4 text-end hide-on-small-screen' >
    <img src={baner} className='w-50 ' alt='' ref={target} onClick={() => setShow(!show)} /> 
    <Overlay target={target.current} show={show} placement="top">
       <div >
             <img src={popupImage} className='w-50 ' alt=''/>
      </div>  
    </Overlay>
    </div>
    </Container>
  )
}
