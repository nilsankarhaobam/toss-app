import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BodyField from './BodyField';

const IndexEx0ne = () => {
  return (

    <div className="flex flex-col min-h-screen bg-gray-200">

        <div className="flex-grow">

            {/* Navbar */}
            <Navbar/>
            
            {/* Body */}
            <BodyField/>

     
        </div>


        {/* footer */}
        <Footer/>



    </div>
   

    
      );
}

export default IndexEx0ne;
