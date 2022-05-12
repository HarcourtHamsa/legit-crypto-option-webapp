import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  SimpleGrid,
  Icon,
  useColorModeValue,
  createIcon,
  Stack,
  HStack,
  VStack,
  Center,
  Flex,
  Image as ChakraImage,
} from "@chakra-ui/react";
import Image from "next/image";
import CountUp from "react-countup";

import { secure, scroll, exchange, payments } from "../assets/list";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import {
  TickerTape,
  ForexCrossRates,
  MarketOverview,
  MarketData,
} from "react-ts-tradingview-widgets";
import FloatingButton from "../components/FloatingButton";

import patterns from "../assets/images/wavyLines.png";
import FixedBottom from "../components/FixedBottom";

export default function Home() {
  return (
    <Box bg="gray.800">
      <Head>
        <title>Expert Hub Trade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <TickerTape colorTheme="dark"></TickerTape>
      <Hero />

      <Container maxW={{ md: "90%", base: "100%" }} overflow="hidden">
        <MarketOverview
          colorTheme="dark"
          width="100%"
          height={400}
        ></MarketOverview>
        <MarketData colorTheme="dark" width="100%" height={400}></MarketData>
      </Container>

      <Box p={4} mt={"36"}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            lineHeight={"110%"}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            color="white"
          >
            <Text>The most trusted cryptocurrency platform</Text>
          </Heading>
          <Text color={"gray.400"} mt={10}>
            Here are a few reasons why you should choose Expert Hub Trade
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            alignItems="center"
            textAlign="center"
          >
            <Box
              bg="-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))"
              p={12}
              borderRadius={"10px"}
            >
              <Image src={secure} alt="" />
              <Text
                fontWeight={600}
                color={"white"}
                my={"2"}
                textTransform="uppercase"
              >
                Secure storage
              </Text>
              <Text color={"gray.400"}>
                We store the vast majority of the digital assets in secure
                offline storage.
              </Text>
            </Box>

            <Box
              bg="-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))"
              p={12}
              borderRadius={"10px"}
            >
              <Image src={scroll} alt="" />
              <Text
                fontWeight={600}
                color={"white"}
                my={"2"}
                textTransform="uppercase"
              >
                Protected by insurance
              </Text>
              <Text color={"white"}>
                Expert Hub Trade maintains crypto insurance and all USD cash
                balances are covered by FDIC insurance, up to a maximum of
                $250,000.
              </Text>
            </Box>

            <Box
              bg="-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))"
              p={12}
              borderRadius="10px"
            >
              <Image src={exchange} alt="" />
              <Text
                fontWeight={600}
                color={"white"}
                my={"2"}
                textTransform="uppercase"
              >
                Industry best practices
              </Text>
              <Text color={"white"}>
                Expert Hub Trade supports a variety of the most popular digital
                currencies.
              </Text>
            </Box>
          </SimpleGrid>

          {/* <Center mt={36}>
            <ChakraImage
              src={
                "https://empiretradesfx.com/wp-content/uploads/2021/05/Asset-1mockup-1.png"
              }
            />
          </Center> */}
        </Container>
      </Box>

      <Box
        bg="linear-gradient(90deg,#40efeb,#7edb92)"
        my={36}
        h={{ md: "2xs", base: "xl" }}
        id="stats"
      >
        <Flex alignItems="center" justifyContent="center" h="inherit">
          <Container maxW={{ md: "80%", base: "90%" }}>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={10}
              color="white"
            >
              <Box textAlign="center">
                <Text
                  fontWeight={600}
                  my={"2"}
                  fontSize={{ base: "4xl" }}
                  lineHeight={"110%"}
                  textAlign="center"
                >
                  <CountUp start={0} end={6000} /> +
                </Text>
                <Text textAlign="center">Profitable trades</Text>
              </Box>

              <Box>
                <Text
                  fontWeight={600}
                  my={"2"}
                  fontSize={{ base: "4xl" }}
                  lineHeight={"110%"}
                  textAlign="center"
                >
                  $
                  <CountUp start={0} end={20} />M
                </Text>
                <Text textAlign="center">Quarterly volume traded</Text>
              </Box>

              <Box>
                <Text
                  fontWeight={600}
                  my={"2"}
                  fontSize={{ base: "4xl" }}
                  lineHeight={"110%"}
                  textAlign="center"
                >
                  13,000 +
                </Text>
                <Text textAlign="center">Verified users</Text>
              </Box>
            </SimpleGrid>
          </Container>
        </Flex>
      </Box>

      <Container maxW={"6xl"}>
        <Box
          p={4}
          mt={"36"}
          bg="rgba(20,53,56,.4)"
          border="1px solid rgba(74,236,220,.4)"
          borderRadius="10px"
          m="auto"
        >
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading
              lineHeight={"110%"}
              fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
              color="white"
              _before={{
                content: '""',
                width: "50px",
                height: "3px",
                bg: "linear-gradient(90deg,#40efeb,#7edb92)",
                display: "block",
                margin: "auto",
                marginBottom: "2rem",
                borderRadius: "10px",
              }}
            >
              <Text>Investment Proposals</Text>
            </Heading>
            <Text color={"gray.400"} mt={10}>
              Expert Hub Trade employees ensure that every investor in our
              company can earn money
            </Text>
          </Stack>

          <Container maxW={"6xl"} mt={10}>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={10}
              mb={32}
              // alignItems="center"
              // bg="red"
              // textAlign="center"
            >
              <Box
                _hover={{
                  cursor: "pointer",
                  bg: "linear-gradient(90deg,#40efeb,#7edb92)",
                  borderRadius: "lg",
                }}
                p={12}
              >
                <Flex color="white" alignItems="center" gap={2}>
                  <Box>
                    <Text fontSize="6xl" fontWeight="bold">
                      5
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="xl" fontWeight="bold">
                      %
                    </Text>
                    <Text textTransform="uppercase" color={"gray.400"}>
                      {" "}
                      Promo
                    </Text>
                  </Box>
                </Flex>
                <Text textTransform="uppercase" color={"white"}>
                  Deposit:
                </Text>
                <Text textTransform="uppercase" color={"white"}>
                  $1000 - $5000
                </Text>
              </Box>

              <Box
                _hover={{
                  cursor: "pointer",
                  bg: "linear-gradient(90deg,#40efeb,#7edb92)",
                  borderRadius: "lg",
                }}
                p={12}
              >
                <Flex color="white" alignItems="center" gap={2}>
                  <Box>
                    <Text fontSize="6xl" fontWeight="bold">
                      2.5
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="xl" fontWeight="bold">
                      %
                    </Text>
                    <Text
                      fontSize="xl"
                      textTransform="uppercase"
                      color={"gray.400"}
                    >
                      {" "}
                      Standard
                    </Text>
                  </Box>
                </Flex>
                <Text textTransform="uppercase" color={"white"}>
                  DEPOSIT:
                </Text>
                <Text fontSize="xl" textTransform="uppercase" color={"white"}>
                  $5000 - $25000
                </Text>
              </Box>

              <Box
                _hover={{
                  cursor: "pointer",
                  bg: "linear-gradient(90deg,#40efeb,#7edb92)",
                  borderRadius: "lg",
                }}
                p={12}
              >
                <Flex color="white" alignItems="center" gap={2}>
                  <Box>
                    <Text fontSize="6xl" fontWeight="bold">
                      3.3
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="xl" fontWeight="bold">
                      %
                    </Text>
                    <Text
                      fontSize="xl"
                      textTransform="uppercase"
                      color={"gray.400"}
                    >
                      {" "}
                      Premium
                    </Text>
                  </Box>
                </Flex>
                <Text textTransform="uppercase" color={"white"}>
                  DEPOSIT:
                </Text>
                <Text fontSize="xl" textTransform="uppercase" color={"white"}>
                  $10000 - $100000
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
              <Box
                p={6}
                w={{ base: "100%", md: "70%" }}
                borderRadius="10px"
                bg="-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))"
              >
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={"white"}
                  mb={10}
                >
                  GENERAL COMMISSIONS
                </Text>

                <Text color="white">
                  These commissions are charged by Maxprofitfx for the platform
                  to work. They are not related to the profit received by our
                  investors
                </Text>
              </Box>

              <Box>
                <Box mb={16}>
                  <Text color="white" mb={5}>
                    COMPANY COMMISSION
                  </Text>

                  <Text color="gray.400">
                    0.5% from the received profit by the robot. This commission
                    shows the earnings of the entire Maxprofitfx structure,
                    namely, each employee.
                  </Text>
                </Box>

                <Box>
                  <Text color="white" mb={5}>
                    COMPANY COMMISSION
                  </Text>

                  <Text color="gray.400">
                    0.5% from the received profit by the robot. This commission
                    shows the earnings of the entire Maxprofitfx structure,
                    namely, each employee.
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
      </Container>

      <Container maxW={{ md: "90%", base: "100%" }} overflow="hidden" mt={20}>
        <ForexCrossRates
          colorTheme="dark"
          width="100%"
          height={400}
        ></ForexCrossRates>
      </Container>

      <Container maxW="6xl" my={20}>
        <Box m="auto" w="fit-content">
          <Image src={payments} alt="" />
          <br />
        </Box>

        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          maxW={"3xl"}
          margin="auto"
          marginTop={{ base: 0, md: "0" }}
        >
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              color={"blue.800"}
              bg="linear-gradient(90deg,#40efeb,#7edb92)"
              //   rounded={"full"}
              as="a"
              href="/account/login"
              px={12}
              py={8}
              size="lg"
              // fontWeight="medium"
              fontSize="md"
            >
              Open Deposit
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* <Testimonials /> */}

      <Footer />

      <FloatingButton />
      <FixedBottom />
    </Box>
  );
}
