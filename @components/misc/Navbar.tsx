import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { useEffect, useState } from "react";

export default function Navbar({ scrollTop }: { scrollTop: number }) {
  const [navBg, setNavBg] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (navBg && scrollTop < 70) {
      setNavBg(false);
    } else if (!navBg && scrollTop > 70) {
      setNavBg(true);
    }
  }, [scrollTop]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Box
      position="fixed"
      w="100%"
      zIndex="999"
      bg={isOpen ? "ared.100" : navBg ? "white" : "transparent"}
    >
      <Flex
        alignItems="center"
        h={{ base: "54px", md: "96px" }}
        boxShadow={
          isOpen ? "none" : navBg ? "0 0 3px 0 rgb(0 0 0 / 22%)" : "none"
        }
      >
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Flex alignItems="center" w="100%">
            <Flex justifyContent="flex-start" flex="auto">
              <Box>
                {isOpen ? (
                  <Image
                    src="assets/logo-fff.png"
                    w={{ base: "80px", md: "110px" }}
                  />
                ) : (
                  <Image
                    src="assets/logo-asap.png"
                    w={{ base: "80px", md: "110px" }}
                  />
                )}
              </Box>
            </Flex>
            <Flex justifyContent="flex-end" alignItems="center">
              <Stack
                direction="row"
                spacing="8"
                align="center"
                display={{ base: "none", md: isOpen ? "none" : "flex" }}
              >
                <Text
                  color="gray.500"
                  fontWeight="bold"
                  fontSize="lg"
                  display={{ base: "none", md: "block" }}
                >
                  Work
                </Text>
                <Text color="gray.500" fontWeight="bold" fontSize="lg">
                  Services
                </Text>
                <Button
                  variant="outline"
                  color="gray.500"
                  borderColor="gray.500"
                  borderWidth="2px"
                  px={5}
                  _focus={{ outline: "none" }}
                >
                  Contact Us
                </Button>
              </Stack>
              <IconButton
                icon={
                  isOpen ? (
                    <AiOutlineClose size="32px" />
                  ) : (
                    <HiOutlineMenuAlt2 size="26px" />
                  )
                }
                ml={8}
                color={isOpen ? "gray.300" : "gray.500"}
                aria-label="hammenu"
                variant="ghost"
                onClick={onToggle}
                _focus={{ outline: "none" }}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
              />
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <NavDropdown />
      </Collapse>
    </Box>
  );
}

const NavDropdown = () => {
  return (
    <Box bg="ared.100">
      <Flex
        h={{ base: "calc(100vh - 54px)", md: "calc(100vh - 96px)" }}
        direction="column"
      >
        <Flex alignItems="center" flex="auto">
          <Container
            maxW={{
              base: "container.lg",
              xl: "container.lg",
              "2xl": "container.xl",
            }}
            pb={20}
            pr={14}
          >
            <Stack
              direction="column"
              spacing="1"
              align="flex-end"
              display={{ base: "flex", md: "none" }}
              pb={1}
            >
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="gray.300"
                opacity="0.8"
                _hover={{ color: "white", opacity: 1 }}
              >
                Work
              </Text>
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="gray.300"
                opacity="0.8"
                _hover={{ color: "white", opacity: 1 }}
              >
                Services
              </Text>
            </Stack>
            <Stack
              direction="column"
              spacing={{ base: 1, md: 4 }}
              align="flex-end"
            >
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
                color="gray.300"
                opacity="0.8"
                _hover={{ color: "white", opacity: 1 }}
              >
                About Us
              </Text>
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
                color="gray.300"
                opacity="0.8"
                _hover={{ color: "white", opacity: 1 }}
              >
                Blog
              </Text>
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
                color="gray.300"
                opacity="0.8"
                _hover={{ color: "white", opacity: 1 }}
              >
                Contact Us
              </Text>
            </Stack>
          </Container>
        </Flex>
        <Flex
          justifyContent={{ base: "center", md: "flex-end" }}
          alignItems="flex-end"
        >
          <Box pr={6} py={4}>
            <Box
              width="50%"
              h="1px"
              bg="gray.300"
              m="0 auto"
              mb={6}
              display={{ base: "block", md: "none" }}
              opacity="0.8"
            />
            <Stack direction="row" spacing="2" mb={[12, 12, 0, 0]}>
              <IconButton
                icon={<AiOutlineTwitter size="18px" />}
                aria-label="twitter"
                variant="ghost"
                color="gray.300"
                opacity="0.8"
                _focus={{ outline: "none" }}
                _hover={{ bg: "transparent", color: "white", opacity: 1 }}
              />
              <IconButton
                icon={<FaFacebookF size="18px" />}
                aria-label="facebook"
                variant="ghost"
                color="gray.300"
                opacity="0.8"
                _focus={{ outline: "none" }}
                _hover={{ bg: "transparent", color: "white", opacity: 1 }}
              />
              <IconButton
                icon={<GrLinkedinOption size="18px" />}
                aria-label="GrLinkedinOption"
                variant="ghost"
                color="gray.300"
                opacity="0.8"
                _focus={{ outline: "none" }}
                _hover={{ bg: "transparent", color: "white", opacity: 1 }}
              />
              <IconButton
                icon={<FaGooglePlusG size="22px" />}
                aria-label="GrLinkedinOption"
                variant="ghost"
                color="gray.300"
                opacity="0.8"
                _focus={{ outline: "none" }}
                _hover={{ bg: "transparent", color: "white", opacity: 1 }}
              />
              <IconButton
                icon={<AiOutlineInstagram size="18px" />}
                aria-label="GrLinkedinOption"
                variant="ghost"
                color="gray.300"
                opacity="0.8"
                _focus={{ outline: "none" }}
                _hover={{ bg: "transparent", color: "white", opacity: 1 }}
              />
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
