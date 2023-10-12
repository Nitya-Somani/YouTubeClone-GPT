import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from "./SideBar";

import { Outlet } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
  const netStatus = useOnlineStatus();
  const theme = useSelector((store) => store.theme.isDarkTheme);

  if (netStatus === false) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-500 rounded-lg p-8">
          <b className="text-3xl text-white">Connection Error !! 😔</b>
        
          <br />
          <br/>
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
  }
  
    
  return (
    <div className={`flex ${theme ? "bg-gray-900" : "bg-white"} `}>
     <Sidebar/> 
      <Outlet/>
    
    </div>
  )
}

export default Body;