import React, { useEffect, useRef } from 'react';
import vanillaTilt from 'vanilla-tilt';

const OnMouseAnimation = ({ refs }) => {
  useEffect(() => {
    Object.values(refs).forEach(ref => {
      if (ref.current) {
        vanillaTilt.init(ref.current, { /* Tilt options */ });
      }
    });

    return () => {
      Object.values(refs).forEach(ref => {
        if (ref.current) {
          ref.current.vanillaTilt.destroy();
        }
      });
    };
  }, [refs]);

  return null;
};

export default OnMouseAnimation;
