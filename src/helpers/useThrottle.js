import { useRef } from "react";

const useThrottle = (cb, delay = 1000, wTrailing = true) => {
  let shouldWait = useRef(false);
  let latestArgs = useRef(null);

  if (!wTrailing) {
    return (...args) => {
      if (shouldWait.current) return;

      cb(...args);
      shouldWait.current = true;

      setTimeout(() => {
        shouldWait.current = false;
      }, delay);
    };
  } else {
    const timeoutF = () => {
      if (latestArgs.current == null) {
        shouldWait.current = false;
      } else {
        cb(...latestArgs.current);
        latestArgs.current = null;
        setTimeout(timeoutF, delay);
      }
    };

    return (...args) => {
      if (shouldWait.current) {
        latestArgs.current = args;
        return;
      }

      cb(...args);
      shouldWait.current = true;

      setTimeout(timeoutF, delay);
    };
  }
};

export default useThrottle;
