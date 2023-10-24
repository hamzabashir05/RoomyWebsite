import React from 'react'
import e1 from '../assets/isb.jpg'
import e2 from '../assets/murree.jpg'
import e3 from '../assets/chitral.jpg'
import e4 from '../assets/hunza.jpg'
import e5 from '../assets/naran.jpg'
import e6 from '../assets/peshawar.jpg'
import e7 from '../assets/nathia.jpg'
import e8 from '../assets/kalam.jpg'
import e9 from '../assets/thandiani.jpg'


export default function Explore() {
  return (
    <div> 
     <p className='dineIn'> EXPLORE </p>
    
    <div className='HostFlex'>
    <div className='row'> 
    <img src={e1} className='exploreImgSize' alt='' />
    <img src={e2} className=' exploreImgSize' alt='' />
    </div>
    <div className='row'> 
    <img src={e3} className='exploreImgSize' alt='' />
    <img src={e4} className=' exploreImgSize' alt='' />
    </div>
    <div className='row'> 
    <img src={e5} className='exploreImgSize' alt='' />
    <img src={e6} className=' exploreImgSize' alt='' />
    </div>
    <div className='row'> 
    <img src={e7} className='exploreImgSize' alt='' />
    <img src={e8} className=' exploreImgSize' alt='' />
    </div>
    <div className='row'> 
    <img src={e9} className='exploreImgSize' alt='' />
   
    </div>
    </div>


    </div>
      
   
  )
}
