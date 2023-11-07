import React from 'react'
import { Container} from 'react-bootstrap'
import l3 from '../assets/locations_carousel_3.jpg'
import Carousel from 'react-multi-carousel';
import l1 from '../assets/locations_carousel_1.jpg'
import l2 from '../assets/locations_carousel_2.jpg'
import l4 from '../assets/locations_carousel_4.jpg'
import l5 from '../assets/locations_carousel_5.jpg'
import l6 from '../assets/locations_carousel_6.jpg'
import l7 from '../assets/locations_carousel_7.jpg'
import l8 from '../assets/locations_carousel_8.jpg'
import l9 from '../assets/locations_carousel_9.jpg'
import l10 from '../assets/locations_carousel_10_2.jpg'
import l11 from '../assets/locations_carousel_12.jpg'
import l12 from '../assets/locations_carousel_13.jpg'
import l13 from '../assets/locations_carousel_14_2.jpg'
import l14 from '../assets/locations_carousel_15_2.jpg'
import l15 from '../assets/locations_carousel_16.jpg'
import l16 from '../assets/locations_carousel_17.jpg'


export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    
    },
    tablet: {
      breakpoint: { max: 1024, min: 550 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
     
    }
  };


  return (


    <Container fluid className='px-0 position-relative' >

          <div className='hotelText'>
            ROOMY&nbsp;HOTEL&nbsp;LOCATIONS
          </div>
          <div className='hotelSubtext'>
            Unlock new memories with us
          </div>
    

      <Carousel keyboard responsive={responsive}>
        <div className='flex-containerMain'> 
          <div className="flex-container " style={{width:"50%"}}>
          <div className='spacing'> <img src={l1} className='sliderImageStyle' alt='' /> 
          <div className='text-block3'> Roomy Hindukush <br></br>Chitral, kpk. </div>
            </div>
            <div className='spacing'> <img src={l12} className='sliderImageStyle' alt='' /> 
            <div className='text-block'> Lemon Lodges By Roomy <br></br>Nathiya Gali, kpk. </div>
             </div>
          </div>
          <div className='spacing'  style={{width:"50%" }}> <img src={l3} className='sliderImageStyle'  alt='' /> 
          <div className='text-block2'> Roomy Signature Hotel<br></br>Islamabad. </div>
           </div>
          </div>
         
         <div className='flex-container' >
          <div className='flex-containerMain'style={{height:"50%" }} >   
            <div className='spacing'> <img src={l4} className='sliderImageStyle' alt='' /> 
            <div className='text-block3'> Roomy Dastaan Hotel <br></br>Karimabad, Hunza. </div>
             </div>
            <div className='spacing'> <img src={l5} className='sliderImageStyle' alt='' /> 
            <div className='text-block'> Roomy MTR Batakundi, Naran.</div>
            </div>
          </div>
          <div className='spacing spacing2 ' style={{height:"50%" }}> <img src={l6} className=' sliderImageStyle'alt='' /> 
          <div className='text-block4'> Roomy Crossroad Hotel<br></br>Peshawar, kpk. </div>
          </div>
          </div>
          
          <div className='flex-containerMain'>        
              <div className='flex-container' style={{width:"50%" }}>
            <div className='spacing'> <img src={l7} className='sliderImageStyle' alt='' /> 
            <div class="text-block"> Roomy Lodge <br></br>Murree, Punjab.
            </div>
            </div>
            <div className='spacing'> <img src={l8} className='sliderImageStyle' alt='' />
            <div class="text-block2">Roomy Yurts <br></br>Gulmit, Hunza.
            </div>
             </div>
          </div>
          <div className='spacing'  style={{width:"50%" }}> <img src={l9} className='sliderImageStyle' alt='' /> 
          <div class="text-block3">Roomy Vantage <br></br>Duiker, Hunza..
            </div>
          </div>
          </div>

         <div className='flex-container'>
          <div className='flex-containerMain'style={{height:"50%" }}>
            <div className='spacing'> <img src={l2} className='sliderImageStyle' alt='' placeholder='hello' />
            <div class="text-block">Roomy Khawna <br></br>Sost, Hunza.
            </div>
             </div>
            <div className='spacing'> <img src={l15} className='sliderImageStyle' alt='' /> 
            <div class="text-block4">Point by Roomy <br></br>Thandiyani, Kpk.
            </div>
            </div>
          </div>
          <div className='spacing spacing2'style={{height:"50%" }}>  <img src={l11} className='sliderImageStyle' alt='' />
          <div class="text-block3">Roomy Yurts <br></br>Minapin, Nagar valley.
            </div>
           </div>
        </div>

         <div className='flex-containerMain'>
          <div className='flex-container' style={{width:"50%" }}>
            <div className='spacing'> <img src={l10}  className='sliderImageStyle' alt='' /> 
            <div class="text-block">Walnut Height by Roomy <br></br>Kalam, Kpk.
            </div></div>
            <div className='spacing'> <img src={l13} c className='sliderImageStyle' alt='' /> 
            <div class="text-block2">Greens by Roomy <br></br>Kalam, kpk.
            </div>
            </div>
          </div>
          <div className='spacing'style={{width:"50%"}}> <img src={l14}  className='sliderImageStyle' alt='' /> 
          <div class="text-block3">Galiend by Roomy <br></br>Nathia, Kpk.
            </div></div>
          </div>

          <div className='flex-containerMain'style={{height:"50%" }}>
            <div className='spacing'> <img src={l16} className='sliderImageStyle' alt='' />
            <div class="text-block4">Galiend by Roomy <br></br>Nathia, Kpk.
            </div>             </div>
             <div className='spacing'> <img src={l16} className='sliderImageStyle' alt='' />
            <div class="text-block4">dummy <br></br>dummy, dummy.
            </div>
             </div>
          </div>

      </Carousel>
    </Container>
  )
}
