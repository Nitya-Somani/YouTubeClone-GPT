import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import { auth } from "../../utils/fireBaseAuth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../StoreSlices/userSlice";
import {
  useOnlineStatus,
  useFetchVideos,
} from "../../utils/customHooks/hooksIndex";
import {
  Header,
  SideBar,
  ConnectionError,
  BrowseHeader,
  Shimmer,
} from "../componentsIndex";

const Body = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const videos = useFetchVideos();

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
  const isBrowsePage = location.pathname === "/browseTV";
  const isErrorPage = location.pathname === "/oops";

  const theme = useSelector((store) => store.theme.isDarkTheme);

  if (netStatus === false) {
    return <ConnectionError />;
  }
  if (videos === null && !isBrowsePage) return <Shimmer />;
  return (
    <div className={`flex ${theme ? "bg-gray-900" : "bg-white"}`}>
      {!isLoginPage && !isBrowsePage && !isErrorPage && <Header />}
      {!isLoginPage && !isBrowsePage && !isErrorPage && <SideBar />}
      {isBrowsePage ? <BrowseHeader /> : null}
      {isErrorPage ? <BrowseHeader /> : null}

      <Outlet />
    </div>
  );
};

export default Body;
