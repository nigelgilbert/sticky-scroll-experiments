import { useEffect } from "react";

const useWindowResizeEvent = (callback) => {
  useEffect(() => {
    window.addEventListener("reize", callback);
    return () => window.removeEventListener("resize", callback);
  }, [callback]);
};

export default useWindowResizeEvent;