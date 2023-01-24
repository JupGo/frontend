import { useCallback, useRef, useState } from 'react';

const useCouter = (initMinutes: number, ms: number) => {
  const [count, setCount] = useState(initMinutes);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const start = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, ms);
  }, []);
  const stop = useCallback(() => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  return { count, start, stop };
};

export default useCouter;
