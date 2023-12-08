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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

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
