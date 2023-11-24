import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

export default function Banner() {
  return (
    <Box h="100vh">
      <Flex h="100vh" alignContent="center" wrap="wrap" w="auto">
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Box textAlign="center" w="100%">
            <Flex wrap="wrap" alignItems="center">
              <Box
                flex={{ base: "0 0 100%", md: "0 0 40%" }}
                maxW={{ base: "100%", md: "40%" }}
                textAlign="start"
                mb={{ base: 10, sm: 0 }}
              >
                <Text
                  fontSize={{ base: "3xl", sm: "4xl", md: "3.3rem" }}
                  fontWeight="bold"
                  textAlign="start"
                  lineHeight="1.1em"
                  mb={6}
                  color="agray.100"
                >
                  San Francisco Mobile App Developers
                </Text>
                <Text fontSize="xl" textAlign="start" mb={10} color="agray.100">
                  Much more than mobile app developers. We create impactful
                  digital products that make your business thrive.
                </Text>
                <Button
                  bg="ared.100"
                  color="white"
                  fontWeight="normal"
                  fontSize="sm"
                  p={6}
                  borderRadius="md"
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "2xl",
                  }}
                >
                  Get Started{" "}
                  <BsArrowRight
                    color="#ffffff"
                    style={{ marginLeft: "15px" }}
                    size="20px"
                  />
                </Button>
              </Box>
              <Box
                flex={{ base: "0 0 100%", md: "0 0 60%" }}
                maxW={{ base: "100%", md: "60%" }}
                display="flex"
                justifyContent="center"
                p={{ base: 0, sm: 10, md: 0 }}
              >
                <Image src="assets/banner1.jpg" maxW="750px" minW="100px" />
              </Box>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}
