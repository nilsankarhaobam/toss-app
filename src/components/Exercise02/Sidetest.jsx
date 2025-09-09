import React, { useState } from 'react';
import arrow from './../../assets/arrow_drop_up.svg'
import {AnimatePresence,motion} from 'framer-motion'

const Sidetest = () => {

    const [isDocOpen, setIsDocOpen] = useState(false)
  return (
    <div className='flex  bg-gray-200' >
      
      <div className=' min-h-screen w-60'>
      <button className='btn bg-success w-full' onClick={()=>setIsDocOpen(!isDocOpen)}>

        <span className='flex items-center gap-3 '>
            📄 <span>Docs</span>
            <img src={arrow} alt="drop" 
            className={`w-5 h-5 transition-transform duration-200 ${isDocOpen ? "rotate-180" : ""}`}/>
        </span>

      </button>

        {/* Submenu (only visible when open) */}
    <AnimatePresence>
        { isDocOpen && (

            <motion.ul
            
            initial = {{height:0, opacity: 0}}
            animate = {{height: "auto" , opacity: 1}}
            exit={{ height:0, opacity: 0 }}
            transition={{ duration : 0.7}}  
            className=' space-y-2 text-sm overflow-hidden'>
                <li className='hover:bg-amber-600 p-2 rounded bg-blue-300 cursor-pointer'>Chemistry</li>
                <li className='hover:bg-amber-600 p-2 rounded bg-blue-300 cursor-pointer'>Physics</li>
                <li className='hover:bg-amber-600 p-2 rounded bg-blue-300 cursor-pointer'>Mathematics</li>
            </motion.ul>
        )

        }
        </AnimatePresence>


</div>

<h1 className='text-center'>Nilsankar's Lab</h1>

    </div>
  );
}

export default Sidetest;
