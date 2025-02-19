import React from 'react';
import { Container, Box, Text, SimpleGrid, Badge, List, ListItem, ListIcon, Image, HStack, VStack } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';

const About = () => {
  // Data for departments and their members
  const departments = [
    {
      name: 'Tech. Department',
      leader: 'Chetanya garg',
      coleader: '.',
      members: ['Ankit kumar', 'Ravi', 'Chaitanya kaushik'],
      image: '/me.jpg',  // Image specific to Tech Department
    },
    {
      name: 'Entrepreneur Department',
      leader: '.',
      coleader: '.',
      members: ['Ankit', '.', '.'],
      image: '/entru-img.jpg',  // Image specific to Tech Department
    },
    {
      name: 'Media Department',
      leader: 'Em',
      coleader: 'Mic',
      members: ['Soon', 'Dark', 'Olinez'],
      image: '/media-img.jpg', // Image specific to Media Department
    },
    {
      name: 'Advertising Department',
      leader: 'Willris',
      coleader: 'Isng',
      members: ['Liee', 'Masonez', 'Lucg'],
      image: '/advert-img.jpg', // Image specific to Advertising Department
    },
    {
      name: 'Organising Department',
      leader: 'Graor',
      coleader: 'Sinson',
      members: ['Acott', 'Noaez', 'Amell'],
      image: '/organ-img.jpg', // Image specific to Event Management Department
    },
  ];

  // Data for the executive body members
  const executiveBody = [
    {
      name: 'name',
      post: 'post',
      image: '/londa.jpg',  // Add image URL for Ankit
    },
    {
      name: 'name',
      post: '.',
      image: '/somil.jpg',  // Add image URL for Nikhil
    },
    {
      name: 'name',
      post: '.',
      image: '/ladki.jpg',  // Add image URL for Sanya
    },
    {
      name: '.',
      post: '.',
      image: '/ladki2.jpg',  // Add image URL for Ravi
    },
  ];

  return (
    <Container maxW="1200px" mt={8} p={5}>
      <ProgressBar />
      {/* About Society Header */}
      <Box mb={10}>
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" color="teal.300">
          About Our Society
        </Text>
        <Text mt={4} fontSize="lg" textAlign="center" color="gray.400">
          We have various departments that work together to create an engaging, vibrant, and active society. Here's a look at our departments and their teams.
        </Text>
      </Box>

      {/* Society President and Vice President */}
      <VStack spacing={12} justify="center" mb={10}>
        {/* President */}
        <HStack align="center" spacing={4}>
          <Box mb={4}>
            <Image
              borderRadius="50%"   // This makes the image circular
              boxSize="150px"       // Adjust size to your preference
              src="/ankit.jpg"         // Example image of the society's logo
              alt="Society Logo"
              objectFit="cover"     // Ensures the image covers the area within the circle
            />
          </Box>
          <VStack align="start">
            <Text fontSize="2xl" fontWeight="bold">President</Text>
            <Text mt={2}>Ankit</Text>
          </VStack>
        </HStack>

        {/* Vice President */}
        <HStack align="center" spacing={4}>
          <Box mb={4}>
            <Image
              borderRadius="50%"   // This makes the image circular
              boxSize="150px"       // Adjust size to your preference
              src="/nikhil.jpg"         // Example image of the society's logo
              alt="Society Logo"
              objectFit="cover"     // Ensures the image covers the area within the circle
            />
          </Box>
          <VStack align="start">
            <Text fontSize="2xl" fontWeight="bold">Vice President</Text>
            <Text mt={2}>Nikhil</Text>
          </VStack>
        </HStack>
      </VStack>

      {/* Executive Body Section */}
      <Box mb={10}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.300">
          Executive Body
        </Text>
        <SimpleGrid columns={[1, 2, 2]} spacing={8} mt={6}>
          {executiveBody.map((member, index) => (
            <Box
              key={index}
              p={5}
              shadow="lg"  // Enhanced shadow effect
              borderWidth="1px"
              borderRadius="md"
              // bg="gray.800"  // Dark background for executive body boxes
              _hover={{ bg: 'gray.700' }} // Hover effect
              transition="0.3s ease-in-out"
            >
              <Image
                borderRadius="50%"   // Circular image for the executive body member
                boxSize="150px"       // Adjust size as needed
                src={member.image}    // Image specific to the executive body member
                alt={member.name}
                objectFit="cover"     // Ensures the image covers the area within the circle
              />
              <Text fontSize="xl" fontWeight="bold" color="teal.400" mt={4}>
                {member.name}
              </Text>
              <Text fontSize="lg" color="gray.100">
                {member.post}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Departments Section */}
      <SimpleGrid columns={[1, 1, 1]} spacing={8}>
        {departments.map((department, index) => (
          <Box
            key={index}
            p={5}
            shadow="lg"  // Enhanced shadow effect for department cards
            borderWidth="1px"
            borderRadius="md"
            bg="gray.800"  // Dark background for department boxes
            _hover={{ bg: 'gray.700' }} // Hover effect
            transition="0.3s ease-in-out"
          >
            <Text fontSize="2xl" fontWeight="bold" color="teal.400">
              {department.name}
            </Text>

            {/* Department Image */}
            <Box h="200px" mb={4}>
              <Image
                borderRadius="8px"
                width="100%"
                height="100%"
                src={department.image}  // Using the department-specific image
                alt={`${department.name} Image`}
                objectFit="cover"
              />
            </Box>

            {/* Department Leaders and Co-leaders */}
            <Box mt={4}>
              <Text fontWeight="semibold" color="gray.100">
                Leader: <Badge colorScheme="teal">{department.leader}</Badge>
              </Text>
              <Text fontWeight="semibold" color="gray.100">
                Co-leader: <Badge colorScheme="teal">{department.coleader}</Badge>
              </Text>
            </Box>

            {/* Department Members */}
            <Box mt={4}>
              <Text fontWeight="semibold" color="gray.100">Members:</Text>
              <List spacing={2}>
                {department.members.map((member, index) => (
                  <ListItem key={index}>
                    <HStack>
                      <ListIcon as={MdCheckCircle} color="teal.500" />
                      <Text color="gray.100">{member}</Text> {/* Added color to the member names */}
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Footer/>
    </Container>
  );
};

export default About;
