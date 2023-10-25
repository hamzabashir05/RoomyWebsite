import React, { useState } from 'react'
import fp from '../assets/Floatphone.png'

export default function FloatingButtons() {

  const [isTextVisible, setTextVisible] = useState(false);

  const toggleText = () => {
    setTextVisible(!isTextVisible);
  };
  return (
   <div>
   <div className={`floating-phone ${isTextVisible ? 'slide-left' : ''}`}>
    <button className="floating-button" onClick={toggleText} >
      {true ? <img src={fp}  alt="Phone" /> :'' }
    </button>
    {isTextVisible && (
      <div className="text">
        +92&nbsp;1234567
      </div>
    )}
  </div>
  </div>



  //  <div>
  //    <div className="floating-phone">
  //     <a href="phone"> <img src={fp}  alt="Phone" /> </a>
  //   </div>
  //   <div className="floating-whatsapp">
  //     <a href="whatsapp"> <img src={fp} alt="whatsapp" /> </a>
  //   </div>
  //   </div>
  );
}
