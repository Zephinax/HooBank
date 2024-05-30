import React, { useState, useEffect } from 'react';

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < end) {
        setCount(count + 1);
      } else {
        clearInterval(intervalId);
      }
    }, duration); // adjust the interval time as needed
    return () => clearInterval(intervalId);
  }, [count, end]);

  return <>{count}</>;
};

export default Counter;
