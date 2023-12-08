import React from "react";

const ConnectionError = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-gray-500 rounded-lg p-8">
        <b className="text-3xl text-white">Connection Error !! 😔</b>

        <br />
        <br />
        <i className="text-gray-300 text-lg">
          Looks like you are offline! Please check your internet connection.
        </i>
        <div className="text-white mt-4">
          <p>No internet</p>
          <p className="mt-2">Try:</p>
          <ul className="list-disc ml-6">
            <li>Checking the network cables, modem, and router</li>
            <li>Reconnecting to Wi-Fi</li>
            <li>Running Windows Network Diagnostics</li>
            <li>ERR_INTERNET_DISCONNECTED</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConnectionError;
