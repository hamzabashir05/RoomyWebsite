import React from 'react';

import e1 from '../assets/isb.jpg';
import e2 from '../assets/murree.jpg';
import e3 from '../assets/chitral.jpg';
import e4 from '../assets/hunza.jpg';
import e5 from '../assets/naran.jpg';
import e6 from '../assets/peshawar.jpg';
import e7 from '../assets/nathia.jpg';
import e8 from '../assets/kalam.jpg';
import e9 from '../assets/thandiani.jpg';
import e10 from '../assets/islamabad_2.jpg';
import e11 from '../assets/upper_jhika_gali.jpg';
import e12 from '../assets/chitral_2.jpg';
import e13 from '../assets/crossroads.jpg';
import e14 from '../assets/thandiani_2.jpg';
import e15 from '../assets/mountain_top_resort.jpg';
import e16 from '../assets/northridge.jpg';
import e17 from '../assets/lemon_lodge.jpg';
import e18 from '../assets/gali_end.jpg'
import e19 from '../assets/greens_by_roomy.jpg'
import e20 from '../assets/walnut_heights_2.jpg'
import e21 from '../assets/karimabad.jpg'
import e22 from '../assets/duikar.jpg'
import e23 from '../assets/sost.jpg'
import e24 from '../assets/minapin.jpg'
import e25 from '../assets/gulmit.jpg'






export default function Explore() {
  const imagePaths = [
    {
      img: e1,
      name: 'ISLAMABAD',
      img2: e10,
      name2:'hello'
    },
    {
      img: e2,
      name: 'MURREE',
      img2: e11,
    },
    {
      img: e3,
      name: 'CHITRAL',
      img2: e12,
    },
    {
      img: e4,
      name: 'HUNZA',
      img2:[e21,e22,e23,e24,e25]
    },
    {
      img: e5,
      name: 'BATAKUNDI',
      img2: [e15, e16],
    },
    {
      img: e6,
      name: 'PESHAWAR',
      img2: e13,
    },
    {
      img: e7,
      name: 'NATHIA GALI',
      img2:[e17,e18],
    },
    {
      img: e8,
      name: 'KALAM',
      img2:[e19,e20]
    },
    {
      img: e9,
      name: 'THANDIANI',
      img2: e14,
    },
  ];

  return (
    <div>
      <p className='dineIn'>EXPLORE</p>
      <div className="image-gallery">
        {imagePaths.map((imagePath, index) => (
          <div className='gallery-image' key={index}>
            <div className='text-blockSample'>
              <p>{imagePath.name}</p>
              <button className='exploreButton'>Explore</button>
            </div>
            <div className='exploreImgS'>
              {Array.isArray(imagePath.img2) ? (
                imagePath.img2.map((img, imgIndex) => (
                
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`Image ${imgIndex + 1}`}
                    style={{ width: '15%' }}
                  />
                 
                ))
              ) : (
              
                <img
                  key={index}
                  src={imagePath.img2}
                  alt={`Image ${index + 1}`}
                  style={{ width: '15%' }}
                />
               
                
              )}
            </div>
            <img
              key={index}
              src={imagePath.img}
              alt={`Image ${index + 1}`}
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}