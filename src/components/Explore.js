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
import e10 from '../assets/islamabad_2.jpg'


export default function Explore() {
 
  const imagePaths = [
 
{
img:e1,
name:"ISLAMABAD",
img2:e10
},
{
img:e2,
name:"MURREE"
},
{
img:e3,
name:"CHITRAL"
},
{
img:e4,
name:"HUNZA"
},
{
img:e5,
name:"BATAKUNDI"
}
,
{
img:e6,
name:"PESHAWAR"
},
{
img:e7,
name:"NATHIA GALI"

},
{
img:e8,
name:"KALAM"
},
{
  img:e9,
  name:"THANDIANI"
}

];



  return (

<div>
<p className='dineIn'> EXPLORE </p>

<div className="image-gallery">
      {imagePaths.map((imagePath, index) => (
       
        <div className='gallery-image'>

       <div className='text-blockSample'>
       <p > {imagePath.name}</p>
       <button className='exploreButton'>Explore</button>
    
      
       </div>

        <img
          key={index}
          src={imagePath.img}
          alt={`Image ${index + 1}`}
          style={{width:"100%"}}
        />
      

        </div>
      ))}
    </div>

</div>


















  //   <div> 
  //    <p className='dineIn'> EXPLORE </p>
    
  //   <div className='HostFlex'>
  //   <div className='row ' > 
  //  <img src={e1} className='exploreImgSize ' alt='' />
  //  <div className='text-blockSample1'> 
  //  <p > ISLAMABAD</p>
  //  <button className='exploreButton'>Explore</button>
  //   </div>
  //  <img src={e2} className='exploreImgSize' alt='' />
  // <div className='text-blockSample'> 
  //  <p > MURREE</p>
  //  <button className='exploreButton'>Explore</button>
  //   </div>
  //   </div>
  //   <div className='row'> 
  //   <img src={e3} className='exploreImgSize' alt='' />
    
    
  //   <img src={e4} className=' exploreImgSize' alt='' />
    
    
  //   <div className='row'> 
  //   <img src={e5} className='exploreImgSize' alt='' />
  //   <img src={e6} className=' exploreImgSize' alt='' />
  //   </div>
  //   <div className='row'> 
  //   <img src={e7} className='exploreImgSize' alt='' />
  //   <img src={e8} className=' exploreImgSize' alt='' />
  //   </div>
  //   <div className='row'> 
  //   <img src={e9} className='exploreImgSize' alt='' />
   
  //   </div>
  //   </div>


  //   </div>
      
  //  </div>
  )
}
