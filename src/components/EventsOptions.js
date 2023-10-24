import React from 'react'
import {Container } from 'react-bootstrap'
import o1 from '../assets/banquet_desktop.jpg'
import e1 from '../assets/wifi.png'
import e3 from '../assets/notepad.png'
import e4 from '../assets/projector.png'
import e5  from '../assets/pen.png'
import e6 from '../assets/sound_system.png'
import e7 from '../assets/staff_2.png'
import o2 from '../assets/boardroom_desktop.jpg'

export default function EventsOptions() {
    
  return (
    <Container >
  <div  className='card1Style'>
    <div>
    <p className='mainText2'>BANQUET&nbsp;HALL</p>
    <p className='longText'>With its vast, open space, this venue is ideal for weddings, conferences, launches and social events. <br/>Book your big day with us and we will make it memorable! Located in the heart of Islamabad, the splendid décor of this venue is ideal for your big day.</p>
    <div > 
    <div className='HostFlex'>
       <div className='row'> 
        < img src={e1} className='eventsSmallImg' alt='' />
        < img src={e7} className=' eventsSmallImg' alt='' />
        < img src={e3} className=' eventsSmallImg' alt='' />
        </div> 
        <div className='row'> 
        < img src={e4} className=' eventsSmallImg' alt='' />
        < img src={e5} className=' eventsSmallImg' alt='' />
        < img src={e6} className=' eventsSmallImg' alt='' />
        </div>
        </div>
    </div>
    <button className='eventsButtons ' alt='' > View Gallery </button>
    <button className='eventsButtons ' alt='' > Get Quote </button>
    </div>

    <img src={o1} className='card1image' alt='' />
    </div>
    


    <div  className='card1Style'>

    <img src={o2} className='card1image' alt='' />

    <div>
    <p className='mainText2'>BOARDROOMS</p>
    <p className='longText'>Our board rooms are equipped with all kinds of modern amenities, <br/>high-speed internet connection, theatrical setups and much more. They are perfect for high-profile meetings and events.</p>
    <div > 
    <div className='HostFlex'>
       <div className='row'> 
        < img src={e1} className='eventsSmallImg' alt='' />
        < img src={e7} className=' eventsSmallImg' alt='' />
        < img src={e3} className=' eventsSmallImg' alt='' />
        </div> 
        <div className='row'> 
        < img src={e4} className=' eventsSmallImg' alt='' />
        < img src={e5} className=' eventsSmallImg' alt='' />
        < img src={e6} className=' eventsSmallImg' alt='' />
        </div>
        </div>
    </div>
    <button className='eventsButtons ' alt='' > View Gallery </button>
    <button className='eventsButtons ' alt='' > Get Quote </button>
    </div>
    
    </div>


    <div  className='card1Style'>
    <div>
    <p className='mainText2'>BANQUET&nbsp;HALL</p>
    <p className='longText'>With its vast, open space, this venue is ideal for weddings, conferences, launches and social events. <br/>Book your big day with us and we will make it memorable! Located in the heart of Islamabad, the splendid décor of this venue is ideal for your big day.</p>
    <div > 
    <div className='HostFlex'>
       <div className='row'> 
        < img src={e1} className='eventsSmallImg' alt='' />
        < img src={e7} className=' eventsSmallImg' alt='' />
        < img src={e3} className=' eventsSmallImg' alt='' />
        </div> 
        <div className='row'> 
        < img src={e4} className=' eventsSmallImg' alt='' />
        < img src={e5} className=' eventsSmallImg' alt='' />
        < img src={e6} className=' eventsSmallImg' alt='' />
        </div>
        </div>
    </div>
    <button className='eventsButtons ' alt='' > View Gallery </button>
    <button className='eventsButtons ' alt='' > Get Quote </button>
    </div>

    <img src={o1} className='card1image' alt='' />
    
    </div>


    <div  className='card1Style'>

    <img src={o2} className='card1image' alt='' />

    <div>
    <p className='mainText2'>BOARDROOMS</p>
    <p className='longText'>Our board rooms are equipped with all kinds of modern amenities, <br/>high-speed internet connection, theatrical setups and much more. They are perfect for high-profile meetings and events.</p>
    <div > 
    <div className='HostFlex'>
       <div className='row'> 
        < img src={e1} className='eventsSmallImg' alt='' />
        < img src={e7} className=' eventsSmallImg' alt='' />
        < img src={e3} className=' eventsSmallImg' alt='' />
        </div> 
        <div className='row'> 
        < img src={e4} className=' eventsSmallImg' alt='' />
        < img src={e5} className=' eventsSmallImg' alt='' />
        < img src={e6} className=' eventsSmallImg' alt='' />
        </div>
        </div>
    </div>
    <button className='eventsButtons ' alt='' > View Gallery </button>
    <button className='eventsButtons ' alt='' > Get Quote </button>
    </div>
    
    </div>
        </Container>
        
  )
}
