import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const errorData = useRouteError();
  console.log(errorData);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-blue-100 w-full">
      <img src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-3959260-3299959.gif" alt="error" className="mb-6  rounded-lg" style={{ width: "28rem" }} />
      {errorData && errorData.error && errorData.error.message ? (
        <div className="bg-gray-800 shadow-md p-4 rounded-lg   mb-6">
          <h1 className="text-2xl text-white font-semibold mb-4">
            Oops! An error occurred:
          </h1>
          <p className="text-lg text-gray-400">{errorData.error.message}</p>
        </div>
      ) : null}
      <h1 className="text-4xl text-gray-800 text-center mb-6 font-semibold">
        Lost in this digital realm? Click the button below to find your way back home.
      </h1>
      <Link to="/" className="text-white text-lg no-underline">
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Return Home
        </button>
      </Link>
    </div>
  );
}

export default Error;
