import React from 'react';
import { useInView } from 'react-intersection-observer';

const Sectionanimation = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`animated-section ${inView ? 'in-view' : ''}`}
    >
      {children}
    </div>
  );
};

export default Sectionanimation;
