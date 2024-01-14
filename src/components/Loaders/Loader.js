import React, { useEffect, useRef } from "react";

const Loader = () => {
  const intervalSpeed = 1;
  const incrementSpeed = 1;

  const progressRef = useRef(0);
  const barRef = useRef(null);
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    barRef.current = document.getElementById("bar");
    progressIntervalRef.current = setInterval(() => {
      progressRef.current += incrementSpeed;
      barRef.current.style.width = progressRef.current + "%";
      if (progressRef.current >= 100) {
        clearInterval(progressIntervalRef.current);
      }
    }, intervalSpeed);

    return () => {
      clearInterval(progressIntervalRef.current);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center w-full bg-gray-900">
      <div className=" p-2">
        <div className="text-white font-bold text-lg ">
          <img
            src="/youTube-Header-logo.png"
            alt="logo"
            height={300}
            width={300}
          />
        </div>
        <div className="h-1  relative rounded-full overflow-hidden w-full bg-black">
          <div id="bar" className="h-full bg-red-800 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
