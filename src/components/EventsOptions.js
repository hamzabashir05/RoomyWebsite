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
import o3 from '../assets/restaurant_desktop.jpg'
import o4 from '../assets/rooftop_desktop.jpg'

export default function EventsOptions() {
    
  return (
    <Container >
  <div  className='eventStyle1'>
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

    <img src={o1} className='eventOptionsImg' alt='' />
    </div>
    


    <div  className='eventStyle2'>

    <img src={o2} className='eventOptionsImg' alt='' />

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


    <div  className='eventStyle1'>
    <div>
    <p className='mainText2'>RESTAURANTS</p>
    <p className='longText'>Experience the finest taste of desi, chinese and continental food at our restaurants located at the most exotic locations across Pakistan.</p>
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

    <img src={o3} className='eventOptionsImg' alt='' />
    
    </div>


    <div  className='eventStyle2'>

    <img src={o4} className='eventOptionsImg' alt='' />

    <div>
    <p className='mainText2'>ROOFTOP</p>
    <p className='longText'>This breathtaking rooftop venue offers magnificent panoramic city views and a backdrop of the Margallas. It is perfect for celebrations, meetings and all kinds of open-air events.</p>
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
