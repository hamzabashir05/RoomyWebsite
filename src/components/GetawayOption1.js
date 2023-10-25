import React from 'react'
import o11 from '../assets/slide_lg_1.jpg'
import o12 from '../assets/slide_lg_2.jpg'
import o13 from '../assets/slide_lg_3.jpg'
import o14 from '../assets/slide_lg_4.jpg'
import { Container } from 'react-bootstrap'



export default function GetawayOption1() {
  return (
  <Container>
  <div className='dineIn'>
  GETAWAYS
  </div>
  <div className='dineText'>
  Unlock new memories with us
  </div>

 
    <div fluid className='getawayOpImg  px-0 position-relative'>
       
        <img src={o11} className='' alt='' />
       
        <img src={o12} className='' alt='' />
       
        <img src={o13} className='' alt='' />
       
        <img src={o14} className='' alt='' />
      
    </div>
    </Container>
  )
}
