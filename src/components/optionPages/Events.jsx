import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, Button, Stack, useColorModeValue } from '@chakra-ui/react';

const events = [
  {
    title: 'Tech Innovators Conference 2025',
    date: 'March 15, 2025',
    description: 'Join industry leaders to explore the latest in technology and innovation.',
    image: '#',
    link: '/events/tech-innovators-2025',
  },
  {
    title: 'Creative Design Summit',
    date: 'April 20, 2025',
    description: 'A gathering of creative minds discussing the future of design.',
    image: 'https://example.com/design-summit.jpg',
    link: '/events/creative-design-summit',
  },
  {
    title: 'Global Marketing Expo',
    date: 'May 10, 2025',
    description: 'Discover cutting-edge marketing strategies and trends.',
    image: 'https://example.com/marketing-expo.jpg',
    link: '/events/global-marketing-expo',
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
      <Container maxW="7xl" centerContent>
        <Heading as="h1" size="2xl" mb={6} textAlign="center" color={textColor}>
          Upcoming Events
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={20}>
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
            >
              <Image src={event.image} alt={event.title} objectFit="cover" />
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
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Events;
