import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress
  const calculateScrollProgress = () => {
    const scrollPosition = window.scrollY;  // Current scroll position
    const docHeight = document.documentElement.scrollHeight;  // Total document height
    const winHeight = window.innerHeight;  // Visible window height
    const totalScroll = docHeight - winHeight; // Maximum scrollable height
    const scrollPercent = (scrollPosition / totalScroll) * 100;

    // Ensure scrollPercent is between 0 and 100
    setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', calculateScrollProgress);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      width="10px"
      bgGradient="linear(to-r, orange.500, yellow.700)"
      transform={`scaleY(${scrollProgress / 100})`}  // Adjust height based on scroll progress
      transformOrigin="top"  // Ensure the scaling starts from the top
      transition="transform 0.2s ease-out"  // Smooth transition for progress change
    />
  );
};

export default ProgressBar;
