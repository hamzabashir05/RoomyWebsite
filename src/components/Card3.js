import React from 'react'
import {Container } from 'react-bootstrap'
import fastCheck from '../assets/fast_check_in_desktop_2.png'
import playstore from '../assets/google_play_desktop.jpg'
import appstore from '../assets/app_store_desktop.jpg'
import fastarrow from '../assets/fast_checkin_bot_arrow.png'


export default function Card3() {

  return (
    <Container className='card1Style' >
 
  <img src={fastCheck} className='card1image' alt='' />
 
<div>
<p className='mainText2'>FAST&nbsp;CHECK&nbsp;IN&nbsp;APP</p>
<p className='longText'> A Three-Step Feature For A Contactless And Hassle-Free Check-In Process. <br/>Download Our App & Book A Room Now!</p>
<div > 
<img src={playstore} className='fastBtn ' alt='' />
 <img src={appstore} className='fastBtn ' alt='' />
 </div>
 <img src={fastarrow} className=' fastBtn img-fluid hide-on-small-screen' alt=''/>
 </div>

    


    </Container>
  )
}
