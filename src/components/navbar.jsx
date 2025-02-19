import { Container, Flex, Text, Button, HStack, useColorMode, useColorModeValue, Image } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";



const NavBar = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"100%"} px={4} position={"fixed"} bg={bgColor} zIndex={10} pb={1} top={0}>
      <Flex
        // pt={"2%"}
        h={14}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "row",
          sm: "row",
        }}
      >
        {/* Logo */}
        <Image src="/logosvg.svg" alt="Logo" boxSize={{ base: "30px", sm: "50px" }}pt={1} objectFit="cover" />

        {/* Typewriter effect text */}
        <Text
          fontSize={{ base: "44", sm: "70" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        //   textAlign={"center"}
          bgGradient={"linear(to-r, orange.500, red.700)"}
          bgClip={"text"}
        >
          cadec
        </Text>

        <HStack spacing={4} alignItems={"center"}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
