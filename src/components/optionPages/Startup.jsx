import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Link, VStack } from '@chakra-ui/react';

const startups = [
  {
    logo: '/2.png', // Replace with actual image path
    name: 'Little Move',
    founderImage: '/richa.png', // Replace with actual image path
    founderName: 'Versha',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/2.png', // Replace with actual image path
    name: 'Little Move',
    founderImage: '/richa.png', // Replace with actual image path
    founderName: 'Versha',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/2.png', // Replace with actual image path
    name: 'Little Move',
    founderImage: '/richa.png', // Replace with actual image path
    founderName: 'Versha',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/2.png', // Replace with actual image path
    name: 'Little Move',
    founderImage: '/richa.png', // Replace with actual image path
    founderName: 'Versha',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/2.png', // Replace with actual image path
    name: 'Little Move',
    founderImage: '/richa.png', // Replace with actual image path
    founderName: 'Versha',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/2.png', // Replace with actual image path
    name: 'Little Move',
    founderImage: '/richa.png', // Replace with actual image path
    founderName: 'Versha',
    contactLink: 'https://www.littlemove.in/',
  },
];

const StartupGallery = () => {
  return (
    <Box py={10} px={5}>
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        Startup Gallery
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
        {startups.map((startup, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"
            boxShadow="lg"
            position="relative"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' }}
            role="group" // Add group role for hover effect
          >
            {/* Startup Logo and Name */}
            <Box p={6}>
              <Image
                src={startup.logo}
                alt={`${startup.name} Logo`}
                width="100px"
                height="100px"
                mx="auto"
                mb={4}
              />
              <Heading as="h3" size="lg" mb={4}>
                {startup.name}
              </Heading>
            </Box>

            {/* Hover Content (Founder Image as Background, Name, and Contact Link) */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg={`url(${startup.founderImage})`} // Founder image as background
              backgroundSize="cover" // Ensure the image covers the entire box
              backgroundPosition="center" // Center the background image
              p={6}
              transform="translateY(100%)"
              transition="transform 0.3s ease-in-out"
              _groupHover={{ transform: 'translateY(0)' }} // Use _groupHover for child hover effect
              borderRadius="lg"
            >
              {/* Overlay to make text readable */}
              <Box
                bg="rgba(255, 255, 255, 0.05)" // Semi-transparent white overlay
                borderRadius="lg"
                p={4}
                pt="50%"
                border="solid"
                borderBlockEndColor="gold"
              >
                <VStack spacing={2} >
                  <Text fontSize="xl" color="black" fontWeight="bold" >
                    {startup.founderName}
                  </Text>
                </VStack>

                <Link
                  href={startup.contactLink}
                  isExternal
                  color="teal.300"
                  fontWeight="bold"
                  _hover={{ textDecoration: 'underline' }}
                >
                  Contact {startup.name}
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StartupGallery;