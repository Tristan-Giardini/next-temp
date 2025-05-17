import { useRef, useState, useEffect } from "react";

const useSize = () => {
  const isClient = typeof window !== "undefined";

  const screenWidthOnLoad = useRef<[number, number]>(
    isClient ? [window.innerWidth, window.innerHeight] : [0, 0]
  );

  const [windowSize, setWindowSize] = useState<[number, number]>(
    screenWidthOnLoad.current
  );

  useEffect(() => {
    if (!isClient) return;

    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", windowSizeHandler);

    // Set initial size on mount (in case ref was 0 on SSR)
    windowSizeHandler();

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, [isClient]);

  return windowSize;
};

export default useSize;
