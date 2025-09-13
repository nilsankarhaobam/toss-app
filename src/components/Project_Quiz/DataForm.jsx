import React from 'react';
import {motion} from 'framer-motion'

const DataForm = () => {
  return (
    <div>
        {/* Form start */}
      <motion.div 
      initial={{x:-700, opacity:0}}
      animate = {{x:0, opacity: 1}}
      transition={{duration: 0.5, ease: "easeInOut"}}
      className='bg-amber-200 p-4 w-[40rem] mx-auto mt-10 rounded'>

        <form action="" className='flex flex-col space-y-2 items-center '>
              <input type="text" className='input input-secondary ' placeholder='Enter the questions'  />
              <input type="text" className='input input-secondary ' placeholder='(a) option'  />
              <input type="text" className='input input-secondary ' placeholder='(b) option'  />
              <input type="text" className='input input-secondary ' placeholder='(c) option'  />
              <input type="text" className='input input-secondary ' placeholder='(d option)'  />
        </form>
      </motion.div>
       {/* Form end here */}

     
    </div>
  );
}

export default DataForm;
