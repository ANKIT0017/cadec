import React from 'react';
import { Box, Text, HStack, Link, Icon, Flex, Image, VStack } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaTwitter, FaCode } from 'react-icons/fa'; // Import additional icons for social media

const Footer = () => {
  const iconColor = "teal.400"; // Define iconColor here

  return (
    <Box bg="gray.800" color="white" py={6} w="100%">
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" w="100%" px={4}>
        {/* Additional Info Section */}
        <VStack align="center" flex={1} mb={{ base: 4, md: 0 }} textAlign={{ base: 'center', md: 'left' }}>
          <HStack>
            <Image src="/logosvg.svg" alt="Logo" boxSize={{ base: "90px", sm: "100px" }} pt={1} objectFit="contain" />
            <Text
              fontSize={{ base: "20", sm: "20" }}
              fontWeight="bold"
              bgGradient="linear(to-r, orange.500, red.700)"
              bgClip="text"
            >
              Career<br/> Development<br/> Center
            </Text>
          </HStack>
          <Text fontSize="sm" mt={2}>
            P.G.D.A.V College | Delhi University
          </Text>
        </VStack>

        {/* Social Media and Developer Info Section */}
        <VStack align="center" flex={1} mb={{ base: 4, md: 0 }} textAlign="center">
          <Text fontSize="sm" fontWeight="bold" mb={3}>
            Follow Us!
          </Text>
          <HStack spacing={4} justify="center" mb={6}>
            <Link href="https://www.instagram.com/yourprofile" target="_blank" _hover={{ transform: 'scale(1.2)', transition: 'transform 0.2s' }}>
              <Icon as={FaInstagram} boxSize={6} color={iconColor} />
            </Link>
            <Link href="https://www.facebook.com/yourprofile" target="_blank" _hover={{ transform: 'scale(1.2)', transition: 'transform 0.2s' }}>
              <Icon as={FaFacebookF} boxSize={6} color={iconColor} />
            </Link>
            <Link href="https://twitter.com/yourprofile" target="_blank" _hover={{ transform: 'scale(1.2)', transition: 'transform 0.2s' }}>
              <Icon as={FaTwitter} boxSize={6} color={iconColor} />
            </Link>
          </HStack>

          <Box display="flex" alignItems="center" justifyContent="center" mt={0}>
            <HStack spacing={4}>
              <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" _hover={{ transform: 'scale(1.2)', transition: 'transform 0.2s' }}>
                <Icon as={FaLinkedin} boxSize={6} color={iconColor} />
              </Link>
              <Link href="mailto:ankitsuperku@gmail.com" _hover={{ transform: 'scale(1.2)', transition: 'transform 0.2s' }}>
                <Icon as={FaEnvelope} boxSize={6} color={iconColor} />
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Flex>

      {/* Developer Section at the Bottom with Glowing Border */}
      <Box w="100%" textAlign="center" mt={4} position="relative">
        {/* Glowing Border Animation */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            filter: "blur(9px)",
            backgroundImage: "conic-gradient(rgb(255, 0, 229) 75%,rgb(255, 0, 0) 75%,rgb(228, 228, 255) 75%,rgb(255, 0, 0) 75%)",
            animation: "rotateBorder 0.1s linear infinite",
            borderRadius: "2%",
          }}
        ></Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            borderRadius: "50px",
            background: "#292a2e",
          }}
        >
          <HStack spacing={4} justify="center" alignContent={"center"}>
            <Text fontSize="sm" fontWeight="bold" mb={3}>
              Developer
            </Text>
            <Link href="https://github.com/ANKIT0017" target="_blank" _hover={{ transform: 'scale(1.2)', transition: 'transform 0.2s' }}>
              <Icon as={FaGithub} boxSize={6} color={iconColor} />
            </Link>
            <Link href="https://ankit0017.github.io/resume/" target="_blank" _hover={{ transform: 'scale(1.2)', transition: 'transform 0.2s' }}>
              <Icon as={FaCode} boxSize={6} color={iconColor} />
            </Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
