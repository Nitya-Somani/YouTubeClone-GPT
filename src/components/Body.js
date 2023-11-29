import React, {  } from "react";
import {  useSelector } from "react-redux";
import Sidebar from "./SideBar";
import ConnectionError from "./ConnectionError";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { auth } from "firebase/auth";
// import {  onAuthStateChanged } from "firebase/auth";
// import {addUser,removeUser} from "../StoreSlices/userSlice";


const Body = () => {
  //const dispatch = useDispatch();


  // useEffect(()=>{
  //  const unsubscribe =  onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const {uid, email, displayName} = user;
  //         dispatch(addUser({uid:uid,email:email,displayName:displayName}));
  //      //   navigate("/");
  //     } else {
  //      dispatch(removeUser());
  //    //  navigate("/Login")
  //     }
  //   });
  //   return () => unsubscribe();
  // },[dispatch]);
  const netStatus = useOnlineStatus();
  const isLoginPage = window.location.pathname === "/Login";
 
  const theme = useSelector((store) => store.theme.isDarkTheme);
  if (netStatus === false) {
    return <ConnectionError />;
  }



  return (
    <div className={`flex ${theme ? "bg-gray-900" : "bg-white"} `}>
    
      {!isLoginPage && <Sidebar />}
      
      <Outlet />
    </div>
  );
};

export default Body;
