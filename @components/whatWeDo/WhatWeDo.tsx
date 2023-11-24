import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMobile, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineDesktopMac } from "react-icons/md";

export default function WhatWeDo() {
  return (
    <Box pb={20}>
      <Container
        maxW={{
          base: "container.lg",
          xl: "container.lg",
          "2xl": "container.xl",
        }}
      >
        <Box>
          <Text
            textAlign="center"
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="3px"
          >
            What we do
          </Text>
          <Box py={8}>
            <Flex wrap="wrap" justifyContent="center">
              <CardKit
                icon={<MdOutlineDesktopMac size="45px" />}
                title="Web Development"
                text="We offer full-stack development focused on responsive design."
              />
              <CardKit
                icon={<AiOutlineMobile size="45px" />}
                title="Mobile App Development"
                text="We create impactful mobile apps with innovative UX/UI design."
              />
              <CardKit
                icon={<AiOutlineSetting size="45px" />}
                title="Product design"
                text="Join us on a discovery journey towards your perfect MVP."
              />
            </Flex>
          </Box>
          <Box mt={10} textAlign="center">
            <Text color="ared.100" fontSize="xl" fontWeight="bold">
              We support your project from start to finish
            </Text>
            <Text
              color="agray.200"
              fontSize="lg"
              maxW="600px"
              m="0 auto"
              pt={4}
              mb={10}
            >
              Our highly-skilled team offers expert agile development services
              to help you thrive. We work with you every step of the way towards
              a product that makes a real difference for your business.
            </Text>
            <Button
              variant="outline"
              color="black"
              borderColor="color"
              px={8}
              py={5}
              borderRadius="4px"
              borderWidth="2px"
              fontWeight="normal"
              fontSize="sm"
              _hover={{ bg: "agray.300", color: "white" }}
              _focus={{ outline: "none" }}
            >
              Tell me more
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const CardKit = ({
  icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) => {
  return (
    <Box
      bg="white"
      p={8}
      boxShadow="0 10px 50px rgb(0 0 0 / 8%), 0 13px 45px rgb(0 0 0 / 8%)"
      flex={{ base: "0 0 100%", lg: "0 0 30%" }}
      display="flex"
      alignItems="center"
      mx={2}
      mb={{ base: 6, lg: 0 }}
      maxW={{ base: "100%", lg: "30%" }}
      transition="transform 0.5s"
      _hover={{ transform: "translateY(-6px)" }}
    >
      <Flex alignItems="center" justifyContent="flex-start">
        <Box>
          <IconButton
            aria-label="mac"
            icon={icon}
            color="ared.100"
            variant="ghost"
            _focus={{ outline: "none" }}
          />
        </Box>
        <Flex direction="column" pl={8}>
          <Text fontSize="lg" fontWeight="semibold" color="agray.100">
            {title}
          </Text>
          <Text fontSize={{ base: "xs", xl: "sm" }} color="agray.100">
            {text}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
