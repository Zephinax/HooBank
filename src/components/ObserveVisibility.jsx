import React, { useRef, useEffect, useState } from 'react';

const ObserveVisibility = ({ children, callback }) => {
  const [hasBeenObserved, setHasBeenObserved] = React.useState(false);
  const ref = useRef();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasBeenObserved) {
          setHasBeenObserved(true);
          callback(true);
        }
      });
    },
    { threshold: 0.5 }
  );

  useEffect(() => {
    if (!hasBeenObserved && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasBeenObserved]);

  return <div ref={ref}>{children}</div>;
};

export default ObserveVisibility;
