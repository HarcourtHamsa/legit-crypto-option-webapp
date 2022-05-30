import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Stack,
  Heading,
  Container,
  Box,
  Text,
  Button,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { TickerTape, CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import FloatingButton from "../components/FloatingButton";
import { PriceWrapper } from "../components/Pricing";
import FixedBottom from "../components/FixedBottom";

import { payments } from "../assets/list";

function Plans() {
  return (
    <Box bg="gray.800">
      <Head>
        <title>Financial Plans - Legit Crypto Option</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <TickerTape colorTheme="dark"></TickerTape>

      <Container maxW={"6xl"}>
        <Box
          p={4}
          mt={"36"}
          bg="rgba(20,53,56,.4)"
          border="1px solid rgba(74,236,220,.4)"
          borderRadius="10px"
        >
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading
              lineHeight={"110%"}
              fontWeight="normal"
              fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
              color="white"
              textTransform="uppercase"
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
              Legit Crypto Option employees ensure that every investor in our
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

        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          my={20}
        >
          <Heading
            lineHeight={"110%"}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            color="white"
            fontWeight="normal"
          >
            <Text>3 STEPS TO START</Text>
          </Heading>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          alignItems="center"
          textAlign="center"
          mb={20}
        >
          <Box
            bg="-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))"
            p={12}
            borderRadius={"10px"}
          >
            <Text
              fontWeight={600}
              color={"white"}
              my={"2"}
              textTransform="uppercase"
            >
              #1
            </Text>
            <Text
              fontWeight={600}
              color={"white"}
              my={"2"}
              textTransform="uppercase"
            >
              REGISTRATION
            </Text>
            <Text color={"white"}>
              Click the Register button. Fill in your details to create a FREE
              Maxprofitfx account in seconds
            </Text>
          </Box>

          <Box
            bg="-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))"
            p={12}
            borderRadius={"10px"}
          >
            <Text
              fontWeight={600}
              color={"white"}
              my={"2"}
              textTransform="uppercase"
            >
              #2
            </Text>
            <Text
              fontWeight={600}
              color={"white"}
              my={"2"}
              textTransform="uppercase"
            >
              CHOOSE INVESTMENT PLAN
            </Text>
            <Text color={"white"}>
              We offer a variety of investment plans to suit your financial
              goals. After reading, make a deposit
            </Text>
          </Box>

          <Box
            bg="-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))"
            p={12}
            borderRadius="10px"
          >
            <Text
              fontWeight={600}
              color={"white"}
              my={"2"}
              textTransform="uppercase"
            >
              #3
            </Text>
            <Text
              fontWeight={600}
              color={"white"}
              my={"2"}
              textTransform="uppercase"
            >
              START EARNING
            </Text>
            <Text color={"white"}>
              After making a deposit, watch your capital grow by accumulating
              daily profit in real time
            </Text>
          </Box>
        </SimpleGrid>

        <Box m="auto" w="fit-content">
          <Image src={payments} alt="" />
          <br />
        </Box>
      </Container>

      <FloatingButton />
      <FixedBottom />
      <Footer />
    </Box>
  );
}

export default Plans;
