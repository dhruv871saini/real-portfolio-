


import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const sentences = [
    "Software Developer",
    "Mern Stack Developer",
    "Freelancer",
    "Open Source Contributor",
    "Problem Solver"
  ];

  const [currentSentence, setCurrentSentence] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing) {
      const timeout = setTimeout(() => {
        setCurrentSentence(prev => prev + sentences[index][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 150); // Adjust typing speed here

      if (charIndex === sentences[index].length) {
        clearTimeout(timeout);
        setTimeout(() => {
          setTyping(false);
        }, 1000); // Delay before starting to erase
      }
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentSentence(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, 50); // Adjust erasing speed here

      if (charIndex === 0) {
        clearTimeout(timeout);
        setTyping(true);
        setIndex(prev => (prev + 1) % sentences.length);
      }
      return () => clearTimeout(timeout);
    }
  }, [typing, charIndex, index]);

  return (
    <div>
      {currentSentence}
    </div>
  );
};

export default TypingEffect;
