import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

export default function Companies() {
  return (
    <Box pb={20}>
      <Box bg="white">
        <Container
          maxW={{
            base: "container.lg",
            xl: "container.lg",
            "2xl": "container.xl",
          }}
        >
          <Box py={20}>
            <Text
              color="agray.100"
              fontSize={["lg", "xl", "xl", "2xl", "3xl"]}
              fontWeight="bold"
              textAlign="center"
              pb={10}
            >
              SAN FRANCISCO AWARD-WINNING COMPANY
            </Text>
            <Flex
              justifyContent="space-between"
              wrap="wrap"
              alignItems="center"
            >
              {[1, 2, 3, 4, 5, 6].map((x) => (
                <Box m={4} key={x}>
                  <Image src={`assets/com${x}.jpg`} w="80px" />
                </Box>
              ))}
            </Flex>
            {/* Header end*/}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
