import {
  Box,
  Container,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <Box>
      <Container
        maxW={{
          base: "container.lg",
          xl: "container.lg",
          "2xl": "container.xl",
        }}
      >
        <Box py={14}>
          <Flex wrap="wrap">
            <Box
              flex={{ base: "0 0 100%", md: "0 0 50%" }}
              maxW={{ base: "100%", md: "50%" }}
            >
              <Text fontSize="md" fontWeight="bold" letterSpacing="3px">
                ASAP DEVELOPERS OFFICE LOCATIONS
              </Text>
              <Flex>
                <Box flex="0 0 50%" maxW="50%" pr={4}>
                  <Text fontSize="sm" fontWeight="semibold" mt={2}>
                    San Francisco
                  </Text>
                  <Text fontSize="sm" mt={1}>
                    535 Mission St, 14th floor
                  </Text>
                  <Text fontSize="sm" mt={1}>
                    San Francisco, CA 94105
                  </Text>
                  <Text fontSize="sm" mt={2}>
                    (+1)415 967 3920
                  </Text>
                </Box>
                <Box flex="0 0 50%" maxW="50%" pr={4}>
                  <Text fontSize="sm" fontWeight="semibold" mt={2}>
                    Montevideo, Uruguay
                  </Text>
                  <Text fontSize="sm" mt={1}>
                    18 de Julio 1117, Apt. 601
                  </Text>
                  <Text fontSize="sm" mt={2}>
                    (+1)415 967 3920
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box
              flex={{ base: "0 0 100%", md: "0 0 50%" }}
              maxW={{ base: "100%", md: "50%" }}
              mt={{ base: 6, md: 0 }}
            >
              <Text fontSize="md" fontWeight="bold" letterSpacing="3px">
                MOBILE APP DEVELOPMENT COMPANY
              </Text>
              <Flex>
                <Box flex="0 0 50%" maxW="50%" pr={4}>
                  <Text fontSize="sm" mt={2}>
                    React Native Development Company
                  </Text>
                  <Text fontSize="sm" mt={2}>
                    Cross-Platform App Development
                  </Text>
                  <Text fontSize="sm" mt={2}>
                    Python Development Company
                  </Text>
                </Box>
                <Box flex="0 0 50%" maxW="50%" pr={4}>
                  <Text fontSize="sm" mt={2}>
                    Web and Mobile App Development
                  </Text>
                  <Text fontSize="sm" mt={2}>
                    App Developers Los Angeles
                  </Text>
                  <Text fontSize="sm" mt={2}>
                    Flutter App Development Company
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent={{ base: "center", md: "flex-end" }}>
          <Stack direction="row" spacing="2" mb="2" mr={{ base: 0, md: 14 }}>
            <IconButton
              icon={<AiOutlineTwitter size="20px" />}
              aria-label="twitter"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            />
            <IconButton
              icon={<FaFacebookF size="20px" />}
              aria-label="facebook"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            />
            <IconButton
              icon={<GrLinkedinOption size="20px" />}
              aria-label="GrLinkedinOption"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            />
            <IconButton
              icon={<FaGooglePlusG size="22px" />}
              aria-label="GrLinkedinOption"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            />
            <IconButton
              icon={<AiOutlineInstagram size="20px" />}
              aria-label="GrLinkedinOption"
              variant="ghost"
              color="gray.400"
              _focus={{ outline: "none" }}
            />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
