import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import ProgressBar from '../ProgressBar';

const Organisation = () => {
  return (
    <Box 
      w="100%" // Ensure Box takes full width
      h="auto" // Height is auto based on image aspect ratio
      pt={0}
      display="flex" 
      // mb={8} 
      mt={{ sm: "0%", md: "24%", lg: "28%" }} // Responsive top margin
      // // overflow="hidden" // Prevents the image from overflowing
      // justifyContent="start" // Aligns image to the left
      // mr={4}
    >
      <ProgressBar />
      <Image
        src="/structure.png"
        alt="Organisation Structure"
        // width="100%"  // Image fills the container width
        // height="auto"  // Maintain aspect ratio based on width
        // objectFit="contain" // Ensure the image covers the container without stretching
        transform={{
          // base: "scaleX(1.4) scaleY(1.4)",  // Normal size for small screens
          // sm: "scaleX(1.5) scaleY(1.5)", // Slight scaling for small screens
          md: "scaleX(1.6) scaleY(1.5)", // Moderate scaling for medium screens
          lg: "scaleX(2.4) scaleY(1.9)", // More scaling for larger screens
        }}
        mt={{md:"4" ,lg:"8"}}
        shadow={"dark-lg"}
        // clipPath={{
        //   base: "inset(15% 12% 0 3%)",       // Crop from the top for smaller screens
        //   sm: "inset(15% 9% 0 3%)",      // Slight cropping for small screens
        //   md: "inset(0% 5.5% 0 0)",   // Custom cropping for medium screens
        //   lg: "inset(0% 5.5% 0 0)",   // More cropping for larger screens
        // }}
        // transition="transform 0.3s ease-in-out" // Smooth scaling transition
        // align={"left"}
      />
    </Box>
  );
};

export default Organisation;
