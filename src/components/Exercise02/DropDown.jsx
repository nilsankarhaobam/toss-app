import { div } from 'framer-motion/client';
import React, { useState } from 'react';

const DropDown = () => {
    const [isDrop, setisDrop] = useState(false)
  return (
    <div className='text-center'>
      <h1>Section : Dropdown</h1>

     {/* Button */}
     <button className="btn" onClick={()=>setisDrop(!isDrop)}>
        
        {isDrop? "CLose Menu" : "Open Menu"}
        
        </button>


    {/* if button click then Drop down menu */}
    {isDrop &&(
        <div className='w-40 bg-white border rounded mt-2 mx-auto' >
            <ul className='space-y-1'>
                <li className='hover:bg-gray-200 p-2 rounded cursor-pointer'>Home</li>
                <li className='hover:bg-gray-200 p-2 rounded cursor-pointer'>About</li>
                <li className='hover:bg-gray-200 p-2 rounded cursor-pointer'>Coming Soon</li>
            </ul>
        </div>
    )}




    </div>

  );
}

export default DropDown;
