import React from 'react';
import { Box, Text, HStack, Link, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';  // Import additional icons for social media

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={6} w="100%">
      <SimpleGrid columns={[1, 1, 3]} spacing={10} maxW="2200px" mx="auto" px={4}>
        {/* Contact Us Section */}
        <Box>
          <Text fontSize="sm" fontWeight="bold" mb={3}>Contact Us</Text>
          <HStack spacing={4}>
            <Icon as={FaEnvelope} boxSize={6} />
            <Link href="mailto:ankitsuperku@gmail.com" color="teal.400">cadecgmail.com</Link>
          </HStack>
        </Box>

        {/* Know the Developer Section */}
        <Box>
          <Text fontSize="sm" fontWeight="bold" mb={3}>Know the Developer</Text>
          <HStack spacing={4}>
            <Icon as={FaGithub} boxSize={6} />
            <Link href="https://github.com/yourprofile" target="_blank" color="teal.400">GitHub</Link>
          </HStack>
          <HStack spacing={4} mt={3}>
            <Icon as={FaLinkedin} boxSize={6} />
            <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" color="teal.400">LinkedIn</Link>
          </HStack>
        </Box>

        {/* Social Media Links Section */}
        <Box>
          <Text fontSize="sm" fontWeight="bold" mb={3}>Follow Us</Text>
          <HStack spacing={4}>
            <Icon as={FaInstagram} boxSize={6} />
            <Link href="https://www.instagram.com/yourprofile" target="_blank" color="teal.400">Instagram</Link>
          </HStack>
          <HStack spacing={4} mt={3}>
            <Icon as={FaFacebookF} boxSize={6} />
            <Link href="https://www.facebook.com/yourprofile" target="_blank" color="teal.400">Facebook</Link>
          </HStack>
          <HStack spacing={4} mt={3}>
            <Icon as={FaTwitter} boxSize={6} />
            <Link href="https://twitter.com/yourprofile" target="_blank" color="teal.400">X (Twitter)</Link>
          </HStack>
        </Box>

        {/* Additional Info Section */}
        <Box w="100%">
          <Text
            fontSize={{ base: "7", sm: "7" }}
            fontWeight="bold"
            textTransform="uppercase"
            bgGradient="linear(to-r, orange.500, red.700)"
            bgClip="text"
            align={"center"}
          >
            Career Development Center
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
