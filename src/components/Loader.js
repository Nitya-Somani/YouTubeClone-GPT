import React, { useEffect, useRef } from 'react';

const Loader = () => {
  const intervalSpeed = 1;
  const incrementSpeed = 1;

  const progressRef = useRef(0);
  const barRef = useRef(null);
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    barRef.current = document.getElementById('bar');
    progressIntervalRef.current = setInterval(() => {
      progressRef.current += incrementSpeed;
      barRef.current.style.width = progressRef.current + '%';
      if (progressRef.current >= 100) {
        clearInterval(progressIntervalRef.current);
      }
    }, intervalSpeed);

    return () => {
      clearInterval(progressIntervalRef.current);
    };
  }, []);

  return (
    <div className="h-1 relative mt-[-8px] rounded-full overflow-hidden">
      <div id="bar" className="h-full bg-red-800 w-0"></div>
    </div>
  );
};

export default Loader;
