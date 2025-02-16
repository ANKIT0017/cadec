import React from 'react';
import { Container, Image, Box, Text, SimpleGrid } from '@chakra-ui/react';
import ProgressBar from '../ProgressBar'; // Import the ProgressBar component
import Footer from '../Footer';
const Home = () => {
  return (
    <>
      {/* Vertical Progress Bar on the Left */}
      <ProgressBar /> {/* Using the ProgressBar component */}

      {/* Main Content */}
      <Container maxW="1200px" mt={5} p={5}>
        {/* Introduction Section */}
        <Box mb={10} display="flex" alignItems="center" mr={4}>
          <Image
            borderRadius="50%"   // This makes the image circular
            boxSize="150px"       // Adjust size to your preference
            src="/me.jpg"  // Example image of the society's logo
            alt="Society Logo"
            objectFit="cover"     // Ensures the image covers the area within the circle
          />
          
        </Box>

        {/* Mission and Vision */}
        <Box mb={10} mr={8}>
          <Text fontSize="2xl" fontWeight="bold">Mission & Vision</Text>
          <Text mt={4}>
            Our mission is to foster a vibrant and inclusive community that encourages collaboration, creativity, and leadership among students. 
            Our vision is to create a space where students feel empowered to express their ideas and passions through various activities and initiatives.
          </Text>
        </Box>

        {/* Gallery Section */}
        <Box mb={10}mr={4}>
          <Text fontSize="2xl" fontWeight="bold">Gallery</Text>
          <Text mt={4}>
            Take a look at some moments from our past events. We capture the spirit and excitement of our society through photography.
          </Text>
          {/* You can replace the following with actual gallery images */}
          <SimpleGrid columns={[1, 1, 1]} spacing={6} mt={4}>
            <Box bg="gray.100" height="200">
              <Image
                borderRadius="5%"   // This makes the image circular
                boxSize="100%"       // Adjust size to your preference
                src="/me.jpg"  // Example image of the society's logo
                alt="Society Logo"
                objectFit="fill"     // Ensures the image covers the area within the circle
              />
            </Box>
            <Box bg="gray.100" height="200">Image 2</Box>
            <Box bg="gray.100" height="200">Image 3</Box>
            <Box bg="gray.100" height="200">Image 4</Box>
            <Box bg="gray.100" height="200">Image 5</Box>
            <Box bg="gray.100" height="200">Image 6</Box>
          </SimpleGrid>
        </Box>
        
      </Container>

      {/* Footer Section */}
      <Footer /> 
    </>
  );
};

export default Home;
