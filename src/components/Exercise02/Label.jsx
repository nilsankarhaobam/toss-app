import React from 'react';

const Label = () => {
  return (
    <div >

      <header className='text-2xl text-center '>Welcome</header>

      <main className='mt-5'>


           <div className='text-center form-control space-x-2'>
              <label htmlFor="username">Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    className='input input-success'
                  />
          

              <label htmlFor="single" className='label cursor-pointer'>
                <span className='label-text'>Single</span>
                <input type="radio" id="single" className='radio radio-success' name='married-status' />
              </label>
            

              <label htmlFor="married" className='label cursor-pointer'>
                <span className='label-text'>Married</span>
                <input type="radio" id="married" className='radio radio-success' name='married-status' />
              </label>

          </div>

    
      </main>
            

  </div>
      

  );
}

export default Label;
