import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tickCallback = () => {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tickCallback, delay);
      return () => {
        clearInterval(id)
      }
    }
  }, [callback, delay]);
}