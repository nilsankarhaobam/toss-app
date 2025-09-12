import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='text-center space-y-3'>
            <h2>Welcome</h2>

            {/* button to open modal */}
            <button className='btn btn-success' onClick={() => setIsOpen(true)}>Open Modal</button>



             {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">This is a Modal</h2>
            <p className="mb-4">Hello! Im a popup box 😄</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      </div>

    
    </>
  );
}

export default Modal;
