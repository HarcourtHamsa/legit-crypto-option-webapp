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
    <Box bg="white">
      <Head>
        <title>Expert Hub Trade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <TickerTape></TickerTape>
      <Hero />

      <Container maxW={{ md: "90%", base: "100%" }} overflow="hidden">
        <MarketOverview
          colorTheme="light"
          width="100%"
          height={800}
        ></MarketOverview>
      </Container>

      <Box p={4} mt={"36"}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            lineHeight={"110%"}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            color="blue.800"
            fontWeight="bold"
          >
            <Text>The most trusted cryptocurrency platform</Text>
          </Heading>
          <Text color={"blue.800"} mt={10}>
            Here are a few reasons why you should choose Expert Hub Trade
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            // alignItems="center"
            // textAlign="center"
          >
            <Box p={12} borderRadius={"10px"}>
              <Image src={secure} alt="" />
              <Text fontWeight={600} color={"blue.800"} my={"2"}>
                Secure storage
              </Text>
              <Text color={"blue.800"} mt={2}>
                We store the vast majority of the digital assets in secure
                offline storage.
              </Text>
            </Box>

            <Box p={12} borderRadius={"10px"}>
              <Image src={scroll} alt="" />
              <Text fontWeight={600} color={"blue.800"} my={"2"}>
                Protected by insurance
              </Text>
              <Text color={"blue.800"} mt={2}>
                Expert Hub Trade maintains crypto insurance and all USD cash
                balances are covered by FDIC insurance.
              </Text>
            </Box>

            <Box p={12} borderRadius="10px">
              <Image src={exchange} alt="" />
              <Text fontWeight={600} color={"blue.800"} my={"2"}>
                Industry best practices
              </Text>
              <Text color={"blue.800"} mt={2}>
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

      <Box my={36} h={{ md: "2xs", base: "xl" }} id="stats">
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
          borderRadius="xl"
          border="2px solid royalblue"
          m="auto"
          bg="rgba(236, 245, 254, 0.5)"
        >
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading
              lineHeight={"110%"}
              fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
              color="blue.800"
              _before={{
                content: '""',
                width: "50px",
                height: "3px",
                bg: "rgb(61, 137, 245)",
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
              color="blue.800"
              // alignItems="center"
              // bg="red"
              // textAlign="center"
            >
              <Box
                _hover={{
                  cursor: "pointer",
                  bg: "-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))",
                  borderRadius: "lg",
                  color: "white",
                }}
                p={12}
              >
                <Flex color="blue.800" alignItems="center" gap={2}>
                  <Box>
                    <Text fontSize="6xl" fontWeight="bold">
                      5
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="xl" fontWeight="bold">
                      %
                    </Text>
                    <Text  textTransform="capitalize" color={"gray.400"} fontSize="xl"> Promo</Text>
                  </Box>
                </Flex>
                <Text  textTransform="capitalize" color={"blue.800"}>Deposit:</Text>
                <Text textTransform="capitalize"  color={"blue.800"}>$1000 - $5000</Text>
              </Box>

              <Box
                _hover={{
                  cursor: "pointer",
                  bg: "-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))",
                  borderRadius: "lg",
                }}
                p={12}
              >
                <Flex color="blue.800" alignItems="center" gap={2}>
                  <Box>
                    <Text fontSize="6xl" fontWeight="bold">
                      2.5
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="xl" fontWeight="bold">
                      %
                    </Text>
                    <Text fontSize="xl"  textTransform="capitalize" color={"gray.400"}>
                      {" "}
                      Standard
                    </Text>
                  </Box>
                </Flex>
                <Text  textTransform="capitalize" color={"blue.800"}>Deposit:</Text>
                <Text textTransform="capitalize"  color={"blue.800"}>
                  $5000 - $25000
                </Text>
              </Box>

              <Box
                _hover={{
                  cursor: "pointer",
                  bg: "-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))",
                  borderRadius: "lg",
                }}
                p={12}
              >
                <Flex color="blue.800" alignItems="center" gap={2}>
                  <Box>
                    <Text fontSize="6xl" fontWeight="bold">
                      3.3
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="xl" fontWeight="bold">
                      %
                    </Text>
                    <Text fontSize="xl"  textTransform="capitalize" color={"gray.400"}>
                      {" "}
                      Premium
                    </Text>
                  </Box>
                </Flex>
                <Text  textTransform="capitalize" color={"blue.800"}>Deposit:</Text>
                <Text  textTransform="capitalize"  color={"blue.800"}>
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
                <Text fontSize="xl" fontWeight="bold" textTransform="capitalize"  color={"white"} mb={10}>
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
                  <Text color="blue.800" mb={5}>
                    COMPANY COMMISSION
                  </Text>

                  <Text color="gray.400">
                    0.5% from the received profit by the robot. This commission
                    shows the earnings of the entire Maxprofitfx structure,
                    namely, each employee.
                  </Text>
                </Box>

                <Box>
                  <Text color="blue.800" mb={5}>
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
          colorTheme="white"
          width="100%"
          height={400}
        ></ForexCrossRates>
      </Container>

      <Container maxW="6xl" my={20}>
        <Box m="auto" w="fit-content">
          <Image src={payments} alt="" />
          <br />
        </Box>
      </Container>

      {/* <Testimonials /> */}

      <Footer />

      <FloatingButton />
      <FixedBottom />
    </Box>
  );
}
