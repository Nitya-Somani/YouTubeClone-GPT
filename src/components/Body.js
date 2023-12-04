import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Sidebar from "./SideBar";
import ConnectionError from "./ConnectionError";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../StoreSlices/userSlice";
import Header from "./Header";
const Body = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);

  const netStatus = useOnlineStatus();
  const isLoginPage = location.pathname === "/Login";

  const theme = useSelector((store) => store.theme.isDarkTheme);

  if (netStatus === false) {
    return <ConnectionError />;
  }

  return (
    <div className={`flex ${theme ? "bg-gray-900" : "bg-white"}`}>
        
        {!isLoginPage && <Header />}
      {!isLoginPage && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
