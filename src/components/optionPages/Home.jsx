import React from 'react';
import { Container, Image, Box, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container display="flex" alignItems="center" w="100%" justifyContent="space-between">
      <Image
        borderRadius="50%"   // This makes the image circular
        boxSize="150px"       // Adjust size to your preference
        src="/me.jpg"  // Example image
        alt="Profile"
        pt={9}
        objectFit="cover"     // Ensures the image covers the area within the circle
      />
      <Box ml={4}>
        <Text fontSize="2xl" fontWeight="bold">Hello</Text>
        <Text mt={2}>This is some text to the right of the circular image.</Text>
      </Box>
    </Container>
  );
};

export default Home;
