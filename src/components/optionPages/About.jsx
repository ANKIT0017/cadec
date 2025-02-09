import React from 'react';
import { Box, Container, Flex, Heading, Text, Image, Stack, Button } from '@chakra-ui/react';

function About() {
  return (
    <Container maxW="container.xl" py={12} mr={4}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        {/* Left Section */}
        <Box flex="1" pr={{ base: 0, md: 8 }}>
          <Image
            src="https://via.placeholder.com/600x400"
            alt="About Us"
            borderRadius="md"
            boxSize="100%"
            objectFit="cover"
            shadow="lg"
          />
        </Box>

        {/* Right Section */}
        <Box flex="1" pl={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="xl" mb={4}>
            About Our Society
          </Heading>
          <Text fontSize="lg" mb={6} mr={4}>
            We are a leading Society in the jdhsckushdiuhiud riuh eiruh guisiu uegrhiu shfaeiluhfr iu erf uierf ueyuf yuegrfiuh euaf yuaegfyugs uc ui iflsuefvuyksvyu geuy gkwuay gkyu ykaew zvj hdb es bfvbeyu sfyue yufeg ufyageurg.
          </Text>
          <Stack direction="row" spacing={4}>
            <Button colorScheme="teal" variant="solid">
              Learn More
            </Button>
            <Button colorScheme="teal" variant="outline">
              Contact Us
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
}

export default About;
