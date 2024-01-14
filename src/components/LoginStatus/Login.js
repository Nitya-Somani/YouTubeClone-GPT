import React, { useState, useRef } from "react";
import checkValidateData from "../../utils/helperFunctions/validate";
import { useAuthenticationHandler } from "../../utils/customHooks/hooksIndex";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { handleAuthentication } = useAuthenticationHandler();
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = async () => {
    const validateMsg = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validateMsg);

    if (validateMsg) return;

    try {
      await handleAuthentication(
        email.current.value,
        password.current.value,
        name.current ? name.current.value : "",
        isSignIn,
        navigate
      );
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="h-screen w-full relative flex items-center justify-center">
      <img
        className="h-screen w-full absolute"
        src="https://img.freepik.com/premium-photo/youtube-template-3d-illustration_665513-18.jpg"
        alt=""
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black opacity-60  rounded-2xl flex flex-col justify-center items-center text-white"
      >
        <h4 className=" text-3xl mb-6 text-left">
          {isSignIn ? " Sign In " : " Sign Up "}
        </h4>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500 text-white"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 mb-4 w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500 text-white"
        />
        <p className="text-red-600 m-2 p-2 font-bold text-lg">{errorMessage}</p>
        <button
          onClick={handleBtnClick}
          className="p-4 bg-red-500 w-full rounded-full font-bold hover:bg-red-600 transition-all"
        >
          {isSignIn ? " Sign In" : " Sign Up"}
        </button>
        <div className="mt-4 text-sm flex">
          <p className="text-blue-500 hover:underline">Need help?</p>
          <span className="mx-2">|</span>
          <p
            onClick={toggleSignIn}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            {isSignIn ? " Sign in now " : " Sign up now "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
