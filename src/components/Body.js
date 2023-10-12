import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./SideBar";
import ConnectionError from "./ConnectionError";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const netStatus = useOnlineStatus();
  const theme = useSelector((store) => store.theme.isDarkTheme);
  if (netStatus === false) {
    return <ConnectionError />;
  }
  return (
    <div className={`flex ${theme ? "bg-gray-900" : "bg-white"} `}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
