import React, { useState } from 'react';




const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);
    const toggleSignIn = ()=>{
        setIsSignIn(!isSignIn);

    }
  return (
    <div className='h-screen w-full relative flex items-center justify-center'>
      <img className='h-screen w-full absolute' src="https://img.freepik.com/premium-photo/youtube-template-3d-illustration_665513-18.jpg" alt="" />
      <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-transparent flex flex-col justify-center items-center text-white'>
        <h4 className='font-bold text-3xl mb-6 text-left'>{isSignIn? " Sign In " :" Sign Up "}</h4>

        {isSignIn && <input type="text" placeholder='Full Name' className='p-3 mb-4 w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500 text-white' />}


        <input type="email" placeholder='Email Address' className='p-3 mb-4 w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500 text-white' />
        <input type="password" placeholder='Password' className='p-3 mb-6 w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500 text-white' />
        <button className='p-4 bg-red-500 w-full rounded-full font-bold hover:bg-red-600 transition-all'>{isSignIn? " Sign In" :" Sign Up"}</button>
        <div className='mt-4 text-sm flex'>
          <p className='text-blue-500 hover:underline'>Need help?</p>
          <span className='mx-2'>|</span>
          <p   onClick={toggleSignIn}  className='text-blue-500 hover:underline cursor-pointer'>{isSignIn? " Sign in now " :" Sign up now "}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
