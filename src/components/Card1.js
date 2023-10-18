import React from 'react'
import { Button, Container } from 'react-bootstrap'
import main2 from '../assets/main2.jpg'

export default function Card1() {
  return (
    <Container className='card1Style'>
   
   <img  src={main2} className='card1image' alt='' />
    <div >
    <div  className='mainText2'>TRAVEL&nbsp;LIKE NEVER&nbsp;BEFORE  </div>
    
    <div className='longText'> Short trip to Islamabad or an adventure up north – book Roomy Hotels at your favorite locations. We understand that travel is personal so we make it an easy, feel-good hotel experience for everyone. </div>
  
   <Button className='tryUsBtn'>Try Us Out!</Button>
   </div>
  

</Container>
  )
}
