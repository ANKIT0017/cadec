import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Text, 
  SimpleGrid, 
  Badge, 
  List, 
  ListItem, 
  ListIcon, 
  Image, 
  HStack, 
  Collapse, 
  Button 
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';

const About = () => {
  // State to manage collapsible sections
  const [showMembers, setShowMembers] = useState({});

  // Toggle function for show/hide members
  const toggleMembers = (index) => {
    setShowMembers((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Data for departments and their members
  const departments = [
    {
      name: 'Tech. Department',
      leader: 'Chetanya garg',
      coleader: 'Deeptanu',
      tl: 'Ravi',
      members: [
        'Ankit kumar', 'Lakshay Batra', 'Harsh Chaudhary', 'Kuber', 'Jyoti', 
        'Chaitanya kaushik', 'Akshat', 'Chandan', 'Karan Kandey'
      ],
      image: '/me.jpg',
    },
    {
      name: 'Entrepreneur Department',
      leader: 'Deepak',
      coleader: 'Yugank',
      tl: 'Arpit Patel',
      members: [
        'Shubham Jain', 'Aditya Garg', 'Aakash sangal', 'Aryan prasad', 'Ayush', 
        'Charanjeet palwar', 'Devanshu Singh', 'Pankaj kumar', 'Sachin', 
        'Shivansh sharma', 'Sweety', 'Ujjwal Kumar', 'Yash Kumar Singh'
      ],
      image: '/entru-img.jpg',
    },
    {
      name: 'Marketing Department',
      leader: 'Prakhar',
      coleader: 'Sanya',
      tl: 'NAN',
      members: [
        'Daksh Dadhich', 'Gunjan', 'Vansh kukreja', 'Yash Garg', 'Pragya kumari', 
        'Kushagra jain', 'Yashank Thakur', 'Pratyush Singh', 'Suman kumar', 
        'Sohil Ali', 'Kabir Sachdeva', 'Sneha Pundhir'
      ],
      image: '/media-img.jpg',
    },
    {
      name: 'Media Department',
      leader: 'Hariom',
      coleader: 'Tanuj Pandey',
      tl: 'Kavita',
      members: ['Adarsh', 'Mansi', 'Krishna', 'Aditya'],
      image: '/media-img.jpg',
    },
    {
      name: 'Advertising Department',
      leader: 'Ankit Yadav',
      coleader: 'Karan',
      tl: 'NAN',
      members: ['Pankaj', 'Mayank'],
      image: '/advert-img.jpg',
    },
    {
      name: 'Organising Department',
      leader: 'Saloni',
      coleader: 'Drishiti',
      tl: 'NAN',
      members: [
        'Himanshu', 'Vinayak Maheshwari', 'Tarun Pillai', 'Rehan Khan', 
        'Komal yadav', 'Suhani yadav', 'Versha', 'Anurag', 'Mimansha Sharma', 
        'Divya Goel', 'Krish', 'Mohd. Mudassir', 'Rishikesh Jha'
      ],
      image: '/organ-img.jpg',
    },
  ];

  // Data for the faculty members
  const faculty = [
    {
      name: 'Prof. Krishna Sharma',
      post: 'Patron',
      image: '/principal.png',
    },
    {
      name: 'Dr. Richa Agarwal Malik',
      post: 'Convenor',
      image: '/richa.png',
    },
    {
      name: 'Dr. Gaurav Kumar',
      post: 'Co-Convenor',
      image: '/gaurav.png',
    },
    {
      name: 'Mrs. Anshita Jain',
      post: 'Mentor',
      image: '/anshita.png',
    },
  ];

  // Data for the executive body members
  const executiveBody = [
    {
      name: 'Ankit Anand',
      post: 'President',
      image: 'ankit.jpg',
    },
    {
      name: 'Nikhil Bhargav',
      post: 'Vice President',
      image: '/nikhil.jpg',
    },
    {
      name: 'Naman',
      post: 'Secretary',
      image: '/londa.jpg',
    },
    {
      name: 'Somil Verma',
      post: 'Treasurer',
      image: '/somil.jpg',
    },
    {
      name: 'Smriti Singh',
      post: 'HR',
      image: '/ladki.jpg',
    },
    {
      name: 'Tina',
      post: 'Joint Secretary',
      image: '/ladki2.jpg',
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
          We have various departments that work together to create an engaging, vibrant, and active society. 
          Here's a look at our departments and their teams.
        </Text>
      </Box>

      {/* Faculty Section */}
      <Box mb={10}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.300">
          Faculty
        </Text>
        <SimpleGrid columns={[1, 2, 2]} spacing={8} mt={6} align="center">
          {faculty.map((member, index) => (
            <Box
              key={index}
              p={5}
              shadow="lg"
              borderWidth="1px"
              borderRadius="md"
              _hover={{ bg: 'gray.700' }}
              transition="0.3s ease-in-out"
            >
              <Image
                borderRadius="50%"
                boxSize="150px"
                src={member.image}
                alt={member.name}
                objectFit="cover"
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

      {/* Executive Body Section */}
      <Box mb={10}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.300">
          Executive Body
        </Text>
        <SimpleGrid columns={[1, 2, 2]} spacing={8} mt={6} align="center">
          {executiveBody.map((member, index) => (
            <Box
              key={index}
              p={5}
              shadow="lg"
              borderWidth="1px"
              borderRadius="md"
              _hover={{ bg: 'gray.700' }}
              transition="0.3s ease-in-out"
            >
              <Image
                borderRadius="50%"
                boxSize="150px"
                src={member.image}
                alt={member.name}
                objectFit="cover"
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
            shadow="lg"
            borderWidth="1px"
            borderRadius="md"
            bg="gray.800"
            _hover={{ bg: 'gray.700' }}
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
                src={department.image}
                alt={`${department.name} Image`}
                objectFit="cover"
              />
            </Box>

            {/* Department Leaders */}
            <Box mt={4}>
              <Text fontWeight="semibold" color="gray.100">
                Head: <Badge colorScheme="teal">{department.leader}</Badge>
              </Text>
              <Text fontWeight="semibold" color="gray.100">
                Co-Head: <Badge colorScheme="teal">{department.coleader}</Badge>
              </Text>
              <Text fontWeight="semibold" color="gray.100">
                TL: <Badge colorScheme="teal">{department.tl}</Badge>
              </Text>
            </Box>

            {/* Collapsible Members List */}
            <Box mt={4}>
              <Text fontWeight="semibold" color="gray.100">Members:</Text>
              <Collapse in={showMembers[index]} startingHeight={100}>
                <List spacing={2}>
                  {department.members.map((member, memberIndex) => (
                    <ListItem key={memberIndex}>
                      <HStack>
                        <ListIcon as={MdCheckCircle} color="teal.500" />
                        <Text color="gray.100">{member}</Text>
                      </HStack>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              <Button
                size="sm"
                mt={2}
                onClick={() => toggleMembers(index)}
                colorScheme="teal"
                variant="link"
              >
                {showMembers[index] ? 'Show Less' : 'Show More'}
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default About;