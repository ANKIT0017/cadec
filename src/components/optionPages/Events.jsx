import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, Button, Stack, useColorModeValue } from '@chakra-ui/react';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';

// Event data
const events = [
  {
    title: 'Bitblitz 1.0',
    date: 'March 18, 2024',
    description: 'description.',
    image: '/Register.jpg',
    link: '/events/tech-innovators-2025',
  },
  {
    title: 'Bitblit 2.0',
    date: 'March 4, 2025',
    description: 'description.',
    image: '/vite.svg',
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

  // Separate events into upcoming and past
  const upcomingEvents = events.filter(event => !isPastDate(event.date));
  const pastEvents = events.filter(event => isPastDate(event.date));

  return (
    <Box py={10} bg={bgColor}>
      <ProgressBar />
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color={textColor}>
        Upcoming Events
      </Heading>
      {upcomingEvents.length > 0 ? (
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 1 }}
          spacing={{ base: 4, lg: 6 }}
          justifyItems="center"
          px={{ base: 0, lg: 0 }}
          maxW={"100%"}
        >
          {upcomingEvents.map((event, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow={cardShadow}
              bg={cardBgColor}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.05)' }}
              maxW="350px"
              width="100%"
              mx="auto"
              px={0}
            >
              <Box p={5}>
                <Heading as="h3" size="lg" mb={2} color={textColor}>
                  {event.title}
                </Heading>
                <Image
                  src={event.image}
                  alt={event.title}
                  width="100%"
                  mb={4}
                />
                <Text fontSize="md" color="gray.500" mb={4}>
                  {event.date}
                </Text>
                <Text fontSize="sm" color={textColor} mb={4}>
                  {event.description}
                </Text>
                <Stack direction="column" spacing={4} justify="center">
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
      ) : (
        <Text  as="h1" size="xl" mb={6} textAlign="center" color={textColor}>
          New Event Coming Soon!!!
        </Text>
      )}

      <Heading as="h1" size="2xl" mb={6} mt={6} textAlign="center" color={textColor}>
        Past Events
      </Heading>
      {pastEvents.length > 0 ? (
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 1 }}
          spacing={{ base: 4, lg: 6 }}
          justifyItems="center"
          px={{ base: 0, lg: 0 }}
          maxW={"100%"}
        >
          {pastEvents.map((event, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow={cardShadow}
              bg={cardBgColor}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.05)' }}
              maxW="350px"
              width="100%"
              mx="auto"
              px={0}
            >
              <Box p={5}>
                <Heading as="h3" size="lg" mb={2} color={textColor}>
                  {event.title}
                </Heading>
                <Image
                  src={event.image}
                  alt={event.title}
                  width="100%"
                  mb={4}
                />
                <Text fontSize="md" color="gray.500" mb={4}>
                  {event.date}
                </Text>
                <Text fontSize="sm" color={textColor} mb={4}>
                  {event.description}
                </Text>
                <Stack direction="column" spacing={4} justify="center">
                  <Button
                    as="a"
                    href={event.link}
                    colorScheme="teal"
                    variant="solid"
                    size="sm"
                    w="full"
                    _hover={{ bg: 'teal.600' }}
                    disabled // Disable the button for past events
                    opacity={0.6} // Reduce opacity to indicate disabled state
                    cursor="not-allowed" // Change cursor to indicate disabled state
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
                    disabled // Disable the button for past events
                    opacity={0.6} // Reduce opacity to indicate disabled state
                    cursor="not-allowed" // Change cursor to indicate disabled state
                  >
                    Register Now
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text textAlign="center" fontSize="xl" color={textColor}>
          No Past Events
        </Text>
      )}
    </Box>
  );
};

export default Events;