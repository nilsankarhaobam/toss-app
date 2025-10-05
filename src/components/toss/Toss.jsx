/** * Toss App * Author: H Nilsankar Singha * License: Apache 2.0 * Website: CodeUniverse * 
 * Description: A fun coin toss game built with React, Framer Motion, and Tailwind CSS. */

import React, { useState, useEffect } from 'react';
import { motion, easeInOut } from 'framer-motion';
import Confetti from 'react-confetti';

const Toss = () => {
  const [result, setResult] = useState("Coin");
  const [btnStatus, setBtnStatus] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true); // Confetti visible on load

  const tossCoin = (e) => {
    e.preventDefault();
    setIsFlipping(true);
    setBtnStatus(true);

    const randomNum = Math.floor(Math.random() * 100);
    const outcome = randomNum < 50 ? "Heads" : "Tails";

    setRotation(prev => prev + 3600);

    setTimeout(() => {
      setResult(outcome);
      setIsFlipping(false);
    }, 5000);
  };

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-tr from-orange-400 to-blue-500 relative flex flex-col justify-center items-center">
      
      {showConfetti && <Confetti />}

      {/* Top-left website tag */}
      <div className="absolute top-4 left-4">
        <span className="text-lg font-bold text-white tracking-widest">
          CodeUniverse
        </span>
      </div>

      {/* Center content */}
      <div className='flex flex-col justify-center items-center'>
        <motion.h1
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"
        >
          WELCOME TO TOSS
        </motion.h1>

        {/* Coin */}
        <motion.div
          className='bg-amber-300 w-40 h-40 rounded-full shadow-xl border-4 border-yellow-600 flex justify-center items-center mb-6'
          animate={{ rotateY: rotation }}
          transition={{ duration: 5, ease: easeInOut }}
        >
          {!isFlipping && (
            <motion.span
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl font-semibold text-yellow-800"
            >
              {result}
            </motion.span>
          )}
        </motion.div>

        {/* Toss Button */}
        <button
          className="btn btn-primary w-50 h-15 mt-10"
          onClick={tossCoin}
          disabled={btnStatus}
        >
          TOSS
        </button>
      </div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-4 text-white text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        © 2025 CodeUniverse | Built by H Nilsankar Singha
      </motion.footer>
    </div>
  );
};

export default Toss;
