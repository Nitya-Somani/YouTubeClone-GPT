import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/fireBaseAuth/firebase";
import { useNavigate } from "react-router-dom";

const BrowseHeader = () => {
  const navigate = useNavigate();
  const userUrl = useSelector((store) => store.user);

  const handleLogin = () => {
    signOut(auth)
      .then(() => {
        navigate("/Login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const navigateLogin = () => {
    navigate("/Login");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50  p-2 bg-opacity-0`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-full md:w-1/2 lg:w-1/4">
          <a href="https://youtube-clone-viewtube.netlify.app/">
            <img
              className="h-12"
              src={"/youTube-Header-logo.png"}
              alt="youtube-logo"
            />
          </a>
        </div>

        <div className="flex items-center">
          <button className="p-2 focus:outline-none flex ">
            <img
              className="w-10 h-10 rounded-lg"
              onClick={navigateLogin}
              src={
                userUrl?.photoURL
                  ? userUrl.photoURL
                  : "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
              }
              alt="Login"
            />

            {userUrl?.photoURL && userUrl.photoURL && (
              <h6 onClick={handleLogin} className="p-1 font-bold text-white">
                (Sign Out)
              </h6>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default BrowseHeader;
