import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, Button, Stack, useColorModeValue } from '@chakra-ui/react';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';

const events = [
  {
    title: 'Bitblitz 1.0',
    date: 'March 18, 2024',
    description: 'description.',
    image: '/Register.jpg',
    link: '/events/tech-innovators-2025',
  },
  {
    title: 'Waste to Wealth',
    date: 'March 5, 2025',
    description: 'description.',
    image: '/vite.svg',
    link: '/events/tech-innovators-2025',
  },
  {
    title: 'Bitblit 2.0',
    date: 'March 6, 2025',
    description: 'description.',
    image: '/vite.svg',
    link: '/events/tech-innovators-2025',
  },
  // Add more events as needed
];

const Events = () => {
  // Define background and text colors based on the current color mode
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.50');
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const cardShadow = useColorModeValue('lg', 'dark-lg');

  return (
    <Box py={10} bg={bgColor}>
      <ProgressBar />
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color={textColor}>
        Upcoming Events
      </Heading>
      <SimpleGrid
        // columns={{ base: 1, md: 2, lg: 2 }} // Number of columns for different screen sizes
        spacing={{ base: 4, lg: 6 }} // Adjust spacing between items
        justifyItems="center" // Center the items within each grid cell
        px={{ base: 0, lg: 0 }} // Remove padding on left and right for all screen sizes
        maxW={"100%"}
      >
        {events.map((event, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow={cardShadow}
            bg={cardBgColor}
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            maxW="350px"  // Ensure cards don't grow too wide
            width="100%"  // Ensure cards take up full width available in the grid cell
            mx="auto" // Center the card in the grid cell
            px={0} // Remove padding inside the cards
          >
            <Box p={5}>
              <Heading as="h3" size="lg" mb={2} color={textColor}>
                {event.title}
              </Heading>
              <Image
                src={event.image}
                alt={event.title}
                width="100%"  // Full width of the card
                mb={4}
              />
              <Text fontSize="md" color="gray.500" mb={4}>
                {event.date}
              </Text>
              <Text fontSize="sm" color={textColor} mb={4}>
                {event.description}
              </Text>
              <Stack direction="row" spacing={4} justify="center">
                <Button
                  as="a"
                  href={event.link}
                  colorScheme="teal"
                  variant="solid"
                  size="sm"
                  w="full"
                  _hover={{ bg: 'teal.600' }}
                >
                  Learn More
                </Button>
                <Button
                  as="a"
                  href={event.link}
                  colorScheme="teal"
                  variant="outline"
                  size="sm"
                  w="full"
                  _hover={{ borderColor: 'teal.600', color: 'teal.600' }}
                >
                  Register Now
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Footer/>
    </Box>
    
  );
};

export default Events;
