import React, { useState } from 'react';
import ice from './../../assets/iceBar.png'
import round from './../../assets/iceRound.png'

const LightDarkMode = () => {
  
  const [isDark, setisDark] = useState(false)

  const textColor = isDark ? "text-white" : ""

  return (
    <div className={isDark ? "bg-black min-h-screen" : "bg-light min-h-screen"}>

        <button className={isDark ? "btn mt-5 bg-light" : "btn mt-5 bg-black text-amber-50"}
        onClick={()=>setisDark(!isDark)}
        >
          {/* toggle */}
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </button>

        <h1 className={` text-2xl text-center ${textColor}`}>Welcome</h1>

      <div className='space-y-3'>
          <div className='card card-border w-90 ml-3 p-2 bg-amber-100'>
          <div className='card-title'>Asia Cup</div>
          <div className='card-body'>Are attending the Tournament ?</div>
          <div className='card-actions justify-between'>
            <button className="btn">No</button>
            <button className="btn">Yes</button>
          </div>
        </div>
        
        <div className={isDark ? "text-amber-50 card card-border w-90 ml-3 p-2 " : "card card-border w-90 ml-3 p-2 bg-amber-100"}>
          <div className='card-title'>Asia Cup</div>
          <div className='card-body'>Are attending the Tournament ?</div>
          <div className='card-actions justify-between'>
            <button className="btn">No</button>
            <button className="btn">Yes</button>
          </div>
        </div>
      </div>


      {/* Carousel */}

      <div className='carousel carousel-vertical rounded-box mt-5 h-96 ml-2'>
        <div className='carousel-item  h-full'>
          <img src={ice} alt="icream" />
        </div>
       
          
 
      </div>
    


      
    </div>
  );
}

export default LightDarkMode;
