import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <Box pb={20}>
      <Box>
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Box
            bg="white"
            boxShadow="0 10px 50px rgb(0 0 0 / 8%), 0 13px 45px rgb(0 0 0 / 8%)"
            p={[6, 10, 16, 16]}
          >
            <Text fontSize="2xl" fontWeight="bold" pb={2}>
              Let’s work together
            </Text>
            <Text>
              San Francisco Mobile App Developers: Turn your idea into a
              reality!
            </Text>
            <Flex direction="column" pt={6}>
              <Flex pb={6}>
                <FormControl id="name" isRequired>
                  <Input
                    placeholder="name*"
                    bg="bgcolor.100"
                    borderWidth="0"
                    _focus={{ borderColor: "ared.100", borderWidth: "2px" }}
                  />
                </FormControl>
                <FormControl id="email" isRequired mx={4}>
                  <Input
                    placeholder="email*"
                    bg="bgcolor.100"
                    borderWidth="0"
                    _focus={{ borderColor: "ared.100", borderWidth: "2px" }}
                  />
                </FormControl>
                <FormControl id="phone" isRequired>
                  <Input
                    placeholder="phone*"
                    bg="bgcolor.100"
                    borderWidth="0"
                    _focus={{ borderColor: "ared.100", borderWidth: "2px" }}
                  />
                </FormControl>
              </Flex>
              <Box>
                <Textarea
                  placeholder="Tell us about your project..."
                  bg="bgcolor.100"
                  borderWidth="0"
                  _focus={{ borderColor: "ared.100", borderWidth: "2px" }}
                />
              </Box>
            </Flex>
            <Button
              bg="ared.100"
              color="white"
              borderRadius="sm"
              size="lg"
              mt={10}
              _hover={{
                transform: "translateY(-3px)",
                boxShadow: "2xl",
              }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
