import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, IconButton, Stack, Image, Text, Flex, Container, Heading } from '@chakra-ui/react';
import { FaHome, FaInfoCircle, FaRegBuilding, FaCalendarAlt, FaRocket } from 'react-icons/fa';
import NavBar from './components/navbar';
import { useAppState } from './components/mid';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

// Importing the option components
import Home from './components/optionPages/Home.jsx';
import About from './components/optionPages/About.jsx';
import Organisation from './components/optionPages/Organisation.jsx';
import Events from './components/optionPages/Events.jsx';
import Startup from './components/optionPages/Startup.jsx';

function App() {
  // Getting state and options from mid.jsx
  const { selectedOption, setSelectedOption, options } = useAppState();
  
  const [showDescription, setShowDescription] = useState(false);

  // Use effect to automatically show the description for the "home" option
  useEffect(() => {
    if (selectedOption === 'home') {
      setShowDescription(true); // Trigger slide in animation when page loads
    }
  }, [selectedOption]);

  // Function to handle the icon click and trigger description animation
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setShowDescription(false); // Reset animation when switching options
    setTimeout(() => setShowDescription(true), 50); // Trigger animation after a short delay
  };

  // Conditional rendering for each option
  const renderContent = () => {
    switch (selectedOption) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'organisation':
        return <Organisation />;
      case 'events':
        return <Events />;
      case 'startup':
        return <Startup />;
      default:
        return <Home />;
    }
  };

  return (
    <Box>
      <NavBar />
      <Container mt={8} pt={6} align="center" shadow="dark-lg">
        <Typewriter
          options={{
            strings: [options[selectedOption].heading],
            autoStart: true,
            loop: true, // Disable looping
            delay: 75,
            deleteSpeed: 0, // Disable deletion effect
          }}
        />
      </Container>
      <Box>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" p={5} mr={4}>
          {/* Image section on the left */}
          <Box flex="2" align="left" mr={4}>
            <Image
              src={options[selectedOption].image}
              alt={selectedOption}
              boxSize={{ base: '300px', md: '600px' }}
              objectFit="cover"
              shadow="dark-lg"
              borderRadius="lg"
            />
          </Box>

          {/* Description section with motion animation */}
          <Box flex="2" mt={4} px={4} textAlign="left" ml="0" mr={4}>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: showDescription ? 0 : '86%' }}
              transition={{ duration: 0.8 }}
            >
              <Heading fontStyle={"oblique"} fontFamily={"revert-layer"} Size={"larger"}>
                {options[selectedOption].description}
              </Heading>
            </motion.div>
          </Box>
        </Flex>

        {/* Icon options on the right */}
        <Box position="fixed" right="10px" top="50%" transform="translateY(-50%)" zIndex="10">
          <Stack spacing={4} direction="column" align="center">
            <IconButton
              icon={<FaHome />}
              aria-label="Home"
              onClick={() => handleSelectOption('home')}
              size="lg"
              colorScheme={selectedOption === 'home' ? 'blue' : 'gray'}
            />
            <IconButton
              icon={<FaInfoCircle />}
              aria-label="About Us"
              onClick={() => handleSelectOption('about')}
              size="lg"
              colorScheme={selectedOption === 'about' ? 'blue' : 'gray'}
            />
            <IconButton
              icon={<FaRegBuilding />}
              aria-label="Organisation Structure"
              onClick={() => handleSelectOption('organisation')}
              size="lg"
              colorScheme={selectedOption === 'organisation' ? 'blue' : 'gray'}
            />
            <IconButton
              icon={<FaCalendarAlt />}
              aria-label="Events"
              onClick={() => handleSelectOption('events')}
              size="lg"
              colorScheme={selectedOption === 'events' ? 'blue' : 'gray'}
            />
            <IconButton
              icon={<FaRocket />}
              aria-label="Startup"
              onClick={() => handleSelectOption('startup')}
              size="lg"
              colorScheme={selectedOption === 'startup' ? 'blue' : 'gray'}
            />
          </Stack>
        </Box>
      </Box>

      {/* Render the corresponding content based on selected option */}
      <Container mt={4} pt={6}>
        {renderContent()}
      </Container>
    </Box>
  );
}

export default App;
