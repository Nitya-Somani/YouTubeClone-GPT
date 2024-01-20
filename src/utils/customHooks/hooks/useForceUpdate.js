import { useState } from "react";

const useForceUpdate = () => {
  const [, setForceUpdate] = useState(0);

  const forceUpdate = () => {
    setForceUpdate((prev) => prev + 1);
  };

  return forceUpdate;
};

export default useForceUpdate;
