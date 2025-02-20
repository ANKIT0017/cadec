import React from 'react';
import { Container, Box, Text, SimpleGrid, Badge, List, ListItem, ListIcon,Button, Image, HStack, VStack } from '@chakra-ui/react';
import ProgressBar from '../ProgressBar'; // Import the ProgressBar component
import Footer from '../Footer';
import { color } from 'framer-motion';
const Home = () => {
  return (
    <>
      {/* Vertical Progress Bar on the Left */}
      <ProgressBar /> {/* Using the ProgressBar component */}

      {/* Main Content */}
      <Container maxW="1200px" mt={5} p={5}>
        {/* Introduction Section */}
        {/* Society President and Vice President */}
              <Box spacing={12} justify="center" mb={10} align="center">
                <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.300" mb={8}>
                          Core Committee
                        </Text>
                {/* President */}
                <Box align="center" spacing={4} mb={8}>
                  <Box mb={4}>
                    <Image
                      borderRadius="50%"   // This makes the image circular
                      boxSize="150px"       // Adjust size to your preference
                      src="/ankit.jpg"         // Example image of the society's logo
                      alt="Society Logo"
                      objectFit="cover"     // Ensures the image covers the area within the circle
                    />
                  </Box>
                  <Box justify="center" >
                    <Text fontSize="2xl" fontWeight="bold">President</Text>
                    <Text mt={2}>Ankit</Text>
                  </Box>
                </Box>
        
                {/* Vice President */}
                <Box align="center" spacing={4} mb={8}>
                  <Box mb={4}>
                    <Image
                      borderRadius="50%"   // This makes the image circular
                      boxSize="150px"       // Adjust size to your preference
                      src="/nikhil.jpg"         // Example image of the society's logo
                      alt="Society Logo"
                      objectFit="cover"     // Ensures the image covers the area within the circle
                    />
                  </Box>
                  <Box align="center">
                    <Text fontSize="2xl" fontWeight="bold">Vice President</Text>
                    <Text mt={2}>Nikhil</Text>
                  </Box>
                </Box>
                <Button
                  align=""
                  as="a"
                  href="/AboutCadec.jsx" 
                  colorScheme="teal"
                  variant="outline"
                  size="sm"
                  w="auto"
                  hover={{ bg: 'teal.600' , color: 'black.' }}
                >
                  View Core Committee
                </Button>
              </Box>

        {/* Mission and Vision */}
        <Box mb={10} mr={8}>
          <Text fontSize="2xl" fontWeight="bold">Principal or convenors</Text>
          <Text mt={4}>
            Our mission is to foster a vibrant and inclusive community that encourages collaboration, creativity, and leadership among students. 
            Our vision is to create a space where students feel empowered to express their ideas and passions through various activities and initiatives.
          </Text>
        </Box>

        {/** P*/}
        

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
                src="/nikhil.jpg"  // Example image of the society's logo
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
      {/* <Footer />  */}
    </>
  );
};

export default Home;
