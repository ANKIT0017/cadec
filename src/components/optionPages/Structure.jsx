import React from 'react';
import { Box, Container, Image } from '@chakra-ui/react';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';

const Organisation = () => {
  return (
    <Container minHeight="100vh" display="flex" flexDirection="column">
      {/* Main content Box */}
      <Box
        w="100%"  // Ensure Box takes full width
        h="auto"  // Height auto to maintain image's aspect ratio
        display="flex"
        flexDirection="column"  // Align elements vertically
        flexGrow={1}  // Allow the Box to take up remaining space and push footer down
        justifyContent="center" // Vertically center the content
        alignItems="center"  // Horizontally center the content
        mt={{ sm: "0%", md: "24%", lg: "28%" }} // Responsive top margin for image
      >
        {/* Progress Bar */}
        <ProgressBar />
        
        {/* Image Section */}
        <Image
          src="/structure.png"
          alt="Organisation Structure"
          transform={{
            md: "scaleX(1.6) scaleY(1.5)", // Moderate scaling for medium screens
            lg: "scaleX(2.4) scaleY(1.9)", // More scaling for larger screens
          }}
          mt={{ md: "4", lg: "8" }} // Responsive margin top for the image
          shadow={"dark-lg"} // Shadow effect
        />
      </Box>

      {/* Footer Component */}
      <Footer />
    </Container>
  );
};

export default Organisation;
