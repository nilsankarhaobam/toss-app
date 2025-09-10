import React, { useState } from "react";
import home from "./../../assets/home.svg";
import settings from "./../../assets/settings.svg";
import m_burger from "./../../assets/menu-burger.svg";
import m_cross from "./../../assets/cross.svg";
import { div, p } from "framer-motion/client";

const SideTest02 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`min-h-screen bg-gray-200 transition-all duration-300 ${
          isOpen ? "w-60" : "w-20"
        }`}
      >
        {/* Header with toggle */}
        <div className="flex items-center justify-between p-3">
          {isOpen && <div className="text-xl font-bold">Menu</div>}
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src={isOpen ? m_cross : m_burger}
              alt="toggle"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Home */}
        <div className="pt-5">
          <button className="btn w-full gap-3 justify-start">
            <img src={home} alt="Home" width={20} height={20} />
            {isOpen && <span>Home</span>}
          </button>
        </div>

        {/* Settings */}
        <div className="pt-2">
          <button className="btn w-full gap-3 justify-start">
            <img src={settings} alt="Settings" width={20} height={20} />
            {isOpen && <span>Settings</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-5">
        <h1 className="text-center text-2xl font-bold">Nilsankar's Lab</h1>

        {/* modal practice */}
        <div className="text-center mt-10 space-y-2">
            <h3>Modal</h3>

            <button className="bg-blue-500 text-amber-50 px-4 py-2 rounded cursor-pointer" 
            onClick={()=>setIsModalOpen(!isModalOpen)}>Open Modal</button>

            {/* modal */}
            {isModalOpen && (
                <div className="bg-gray-100 space-y-2 p-5">
                    <h1>Info</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <button className="btn btn-secondary" 
                    onClick={()=>setIsModalOpen(!isModalOpen)}>Modal Close</button>
                </div>
            )}

        </div>



      </div>

   
    </div>
  );
};

export default SideTest02;
