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

 
    <div  className='getawayOpImg'>
       
       <div> <img src={o11} className='getawayOpImg2' alt='' /> <p>CHITRAL</p></div>
       
     <div>   <img src={o12} className='getawayOpImg2' alt='' /><p>HUNZA</p></div>
       
     <div> <img src={o13} className='getawayOpImg2' alt='' /><p>KALAM</p></div>
       
     <div><img src={o14} className='getawayOpImg2' alt='' /><p>MURREE, GALIYAT</p></div>
      
    </div>
    </Container>
  )
}
