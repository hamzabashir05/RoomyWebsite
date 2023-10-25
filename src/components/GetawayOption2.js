import React from 'react'
import { Container } from 'react-bootstrap'
import o21 from '../assets/chitral_intro_desktop.jpg'
import o22 from '../assets/kalam_intro_desktop.jpg'
import o23 from '../assets/hunza_intro_desktop.jpg'
import o24 from '../assets/galiyat_intro_desktop.jpg'

export default function GetawayOption2() {
  return (
    <Container >
    <div  className='eventStyle2'>
      <div>
      <p className='mainText2'>CHITRAL</p>
      <p className='longText'>Explore the city during the day and spend your nights in the comfortable rooms of Roomy Hindukush Sarai. Whether you’re traveling with your spouse, friends, or your family, our itinerary is perfect for all kinds of traveler.</p>
      <button className='eventsButtons ' alt='' > Details </button>  
  </div>
      <img src={o21} className='eventOptionsImg' alt='' />
      </div>
      
  
  
      <div  className='eventStyle1'>
      <img src={o23} className='eventOptionsImg' alt='' />
      <div>
      <p className='mainText2'>HUNZA</p>
      <p className='longText'>Frequently referred to as ‘Heaven on Earth’, Hunza is home to spectacular views, exquisite cuisine and Karakoram’s best kept secrets. Explore the entirety of Hunza with Roomy Getaways!</p>
      <button className='eventsButtons ' alt='' > Details </button>
      </div>
      
      </div>
  
  
      <div  className='eventStyle2'>
      <div>
      <p className='mainText2'>MURREE-GALIYAT</p>
      <p className='longText'>Escape your busy routine and enjoy the serenity of Murree-Nathiagali-Galiyat with Roomy Getaways! Our specially curated itineraries will make your travel experience memorable!</p>
     
      <button className='eventsButtons ' alt='' > Details </button>
     
      </div>
  
      <img src={o24} className='eventOptionsImg' alt='' />
      
      </div>
  
  
      <div  className='eventStyle1'>
  
      <img src={o22} className='eventOptionsImg' alt='' />
  
      <div>
      <p className='mainText2'>KALAM</p>
      <p className='longText'>Tired of hustle and bustle of city? Look no further! We will take you in complete luxury to the Switzerland of Pakistan. The beautiful Kalam Valley with high altitude mountains, river stream and beautiful dense green forest makes it the perfect getaway spot. Our travel packages will meet all your travel needs.</p>
     
      <button className='eventsButtons ' alt='' >Details </button>
   
      </div>
      
      </div>
          </Container>
  )
}
