import React, { useState } from 'react';

const InputForm = () => {
    const [user, setUser] = useState("")
    const [message, setMessage] = useState("")
    const [checked, setChecked] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)


    // submit function
    function handleSubmit (e){
            e.preventDefault()
            setIsSubmit(true)

    }

  return (
    <div>
      <header className='text-center'>
        <h2>Welcome to Input Form</h2>
      </header>
      <main>
            <form className='mt-5 text-center space-y-4' onSubmit={handleSubmit}>
                <input type="text" required 
                className='input input-primary w-full max-w-xs' 
                placeholder='user name'
                value={user}
                onChange={(e)=> setUser(e.target.value)}
                />

              <textarea
                    placeholder="Your message"
                    className="textarea textarea-bordered w-full"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                 {/* radio button */}

                <div className='form-control'>
                    <label htmlFor="#" className='label cursor-pointer'>
                        <span className='label-text'>Remember Me</span>
                        <input type="checkbox" className={`checkbox checkbox-primary`} checked={checked}
                        disabled={isSubmit}
                        onChange={()=>setChecked(!checked)} />
                    </label>
                </div>

                <button className="btn" type='submit'>Submit</button>
            </form>

           

            {/* Display data if form is submitted */}

            {isSubmit && (
                <div className='text-center mt-5 space-y-2'>
                    <h2>Welcome {user}</h2>
                    <p>Your message : {message}</p>
                    <p>You have set to be : {checked ? "Remembered" : "UnMark"}</p>
                </div>
            )}
          
      </main>
    </div>
  );
}

export default InputForm;
