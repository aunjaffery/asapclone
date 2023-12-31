import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { IoIosArrowDropright } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Clients() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <Box>
      <Container
        maxW={{
          base: "container.lg",
          xl: "container.lg",
          "2xl": "container.xl",
        }}
      >
        <Box borderTop="1px" borderColor="bcolor.100" pt={6}>
          <Flex
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
          >
            <Text
              color="agray.100"
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              pb={[3, 3, 0, 0]}
            >
              WHAT OUR CLIENTS HAVE TO SAY
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Text color="agray.100" fontSize="md" fontWeight="bold" mr={2}>
                Learn more about our company
              </Text>
              <IoIosArrowDropright size="25px" />
            </Flex>
          </Flex>
          {/* Header end*/}
          <Box py={8}>
            <Carousel
              responsive={responsive}
              infinite={true}
              partialVisible={true}
              arrows={false}
              showDots={false}
            >
              {[1, 1, 1, 1, 1].map((x, _id) => (
                <Box bg="white" m={6} p={8} borderRadius="md" key={_id}>
                  <Flex justifyContent="flex-start" alignItems="flex-start">
                    <Box w="100%" color="gray.400" mr={4}>
                      <FaQuoteLeft size="30px" />
                    </Box>
                    <Text color="gray.500" fontSize="sm">
                      <Text as="span" fontWeight="bold" mr="1">
                        asap developers
                      </Text>
                      features an unselfish and driven team, committed to
                      providing high-level customer service. They succeed in
                      remaining organized and communicating well despite time
                      difference challenges. The staff is accommodating and
                      receptive of feedback, making for a hassle-free
                      engagement.
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
