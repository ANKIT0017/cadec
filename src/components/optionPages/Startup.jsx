import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Link, VStack } from '@chakra-ui/react';

const startups = [
  {
    logo: '/startup/hust.jpg', // Replace with actual image path
    name: 'Hustle Express',
    founderImage: '/startup/satya.jpg', // Replace with actual image path
    founderName: 'Satya',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/startup/gama.jpg', // Replace with actual image path
    name: 'Gama',
    founderImage: '/startup/subh.jpg', // Replace with actual image path
    founderName: 'Shubham jain',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/startup/shri.jpg', // Replace with actual image path
    name: 'ShriJi Gavya',
    founderImage: '/nikhil.jpg', // Replace with actual image path
    founderName: 'Nikhil',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/startup/little.png', // Replace with actual image path
    name: 'Little Move',
    founderImage: '/startup/little.jpg', // Replace with actual image path
    founderName: 'Versha',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/startup/gg.jpg', // Replace with actual image path
    name: 'Gossip Gifting',
    founderImage: '/startup/mansa.jpg', // Replace with actual image path
    founderName: 'Mansa',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/startup/siks.jpg', // Replace with actual image path
    name: 'Siksakah',
    founderImage: '/startup/khus.jpg', // Replace with actual image path
    founderName: 'Khusi',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/startup/bon.jpg', // Replace with actual image path
    name: 'Bliss bonzai',
    founderImage: '/startup/priy.jpg', // Replace with actual image path
    founderName: 'Priyanka',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/startup/spl.jpg', // Replace with actual image path
    name: 'Splashwall',
    founderImage: '/startup/adit.jpg', // Replace with actual image path
    founderName: 'Aaditya',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/startup/well.jpg', // Replace with actual image path
    name: 'Staywell',
    founderImage: '/startup/deeva.jpg', // Replace with actual image path
    founderName: 'Deevanshu',
    contactLink: 'https://www.littlemove.in/',
  },
  {
    logo: '/startup/bharat.jpg', // Replace with actual image path
    name: 'Bharat Bites',
    founderImage: '/startup/sachin.jpg', // Replace with actual image path
    founderName: 'Sachin',
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
            h="300px"
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
              p={4}
              h="80%"
              transform="translateY(100%)"
              transition="transform 0.3s ease-in-out"
              _groupHover={{ transform: 'translateY(0)' }} // Use _groupHover for child hover effect
              borderRadius="lg"
            >
              {/* Overlay to make text readable */}
              <Box
                bg="rgba(255, 255, 255, 0.001)" // Semi-transparent white overlay
                borderRadius="lg"
                p={4}
                pt="100px"
                h="210px"
                border="solid"
                borderBlockEndColor="gold"
              >
                <Box p={1} bg="#36454F" borderRadius={5}>
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
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StartupGallery;