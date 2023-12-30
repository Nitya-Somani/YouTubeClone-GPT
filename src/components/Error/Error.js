import React  from 'react';
import { Link,useRouteError } from 'react-router-dom';


const Error = () => {
  const errorData = useRouteError();
  
  return (

    <div className="min-h-screen  w-full bg-gradient-to-b from-blue-200 to-blue-100 flex items-center justify-center relative">
 
      <div id="particles-container" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></div>
      <div className="z-10 text-center text-white mx-4">
        <img
          src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-3959260-3299959.gif"
          alt="error"
          className="mb-6 rounded-lg w-72 mx-auto"
        />
        {errorData && errorData.error && errorData.error.message ? (
          <div className="bg-gray-800 shadow-md p-4 rounded-lg mb-6">
            <h1 className="text-2xl font-semibold mb-4">Oops! An error occurred:</h1>
            <p className="text-lg text-gray-400">{errorData.error.message}</p>
          </div>
        ) : null}
        <h1 className="text-4xl text-gray-800 font-semibold mb-6">
          Lost in this digital realm? Click the button below to find your way back home.
        </h1>
        <Link to="/" className="text-white text-lg no-underline">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
