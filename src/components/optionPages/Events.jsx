import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, Button, Stack, useColorModeValue } from '@chakra-ui/react';
import ProgressBar from '../ProgressBar';

// Event data
const events = [
  {
    title: 'Bitblitz 1.0',
    date: 'March 18, 2024',
    description: 'description.',
    image: '/assets/Register.jpg',  // Ensure the image is in the public folder or use an import
    link: '/events/tech-innovators-2025',
  },
  {
    title: 'Waste to Wealth',
    date: 'March 5, 2025',
    description: 'description.',
    image: '/assets/Register.jpg',  // Ensure the image is in the public folder or use an import
    link: '/events/tech-innovators-2025',
  },
  {
    title: 'Bitblit 2.0',
    date: 'March 6, 2025',
    description: 'description.',
    image: '/assets/Register.jpg',  // Ensure the image is in the public folder or use an import
    link: '/events/tech-innovators-2025',
  },
];

const Events = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.50');
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const cardShadow = useColorModeValue('lg', 'dark-lg');

  const isPastDate = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate < today;
  };

  return (
    <Box py={10} bg={bgColor}>
      <ProgressBar />
      <Container maxW="7xl" centerContent>
        <Heading as="h1" size="2xl" mb={6} textAlign="center" color={textColor}>
          Upcoming Events
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={20}>
          {events.map((event, index) => {
            return (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow={cardShadow}
                bg={cardBgColor}
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'scale(1.05)' }}
                opacity={isPastDate(event.date) ? 0.5 : 1} // For past events, dim the card
              >
                <Image src={event.image} alt={event.title} objectFit="fill" />
                <Box p={5}>
                  <Heading as="h3" size="lg" mb={2} color={textColor}>
                    {event.title}
                  </Heading>
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
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Events;
