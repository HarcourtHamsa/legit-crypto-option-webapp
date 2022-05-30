import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import { TickerTape } from "react-ts-tradingview-widgets";

import {
  Stack,
  Heading,
  Container,
  Box,
  Text,
  SimpleGrid,
  Center,
  Image,
  Stat,
  useColorModeValue,
  Flex,
  StatLabel,
  StatNumber,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { BiTrophy } from "react-icons/bi";
import { BsGraphUp, BsGrid3X3Gap } from "react-icons/bs";
import { IoMdFlash } from "react-icons/io";

function StatsCard(props) {
  const { title, text, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={10}
      shadow={"xl"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
      color="black"
    >
      <Stack spacing={6}>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>

        <StatLabel>{title}</StatLabel>
        <StatNumber fontSize={"sm"}>{text}</StatNumber>
      </Stack>
    </Stat>
  );
}

function About() {
  return (
    <Box bg="white">
      <Head>
        <title>About Us - Legit Crypto Option</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <TickerTape colorTheme="light"></TickerTape>

      <Box
        w="full"
        h={{ base: "lg", md: "lg" }}
        // bg="blue.400"
        id="about"
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <VStack
          w={"full"}
          h="full"
          justify={"left"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
        >
          <Box maxW="6xl" textAlign="left" px={{ base: 12, md: 0 }}>
            <Stack
              as={Box}
              textAlign={"left"}
              spacing={{ base: 8, md: 14 }}
              py={{ base: 20, md: 20 }}
              px={{ base: 0, md: 20 }}
              maxW={"4xl"}
            >
              <Heading
                // fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
                color="white"
              >
                <Text>
                  Relentlessly building the future of finance since 2011
                </Text>
              </Heading>
              <Text color="white">
                The world’s leading crypto finance house serving people,
                projects, protocols and institutions since 2011.
              </Text>
            </Stack>
          </Box>
        </VStack>
      </Box>

      <Container maxW={"6xl"} mb={20}>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
        >
          <Box>
            <Image
              alt=""
              src={
                "https://empiretradesfx.com/wp-content/uploads/2021/05/Asset-1mockup-1.png"
              }
            />
          </Box>

          <Box>
            <Heading
              // fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "3xl" }}
              lineHeight={"110%"}
              mb={5}
            >
              <Text>We Are Legit Crypto Options</Text>
            </Heading>
            <Text>
              Legit Crypto Option is a successful online trading and investment
              platform for brokers interested in Foreign Exchange, Stock Market
              Trading, and Cryptocurrency Trading. We give our users the
              potential to generate financial returns on both rising and falling
              prices across indices, FX, commodities, shares and
              cryptocurrencies.{" "}
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* <Box mt={24} color="black">
        <Container maxW={"6xl"} mb={20}>
          <Heading
            // fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "3xl" }}
            lineHeight={"110%"}
            mb={5}
          >
            <Text>Putting Our Clients First For Over A Decade.</Text>
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={"WINNING TRADING STRATEGY"}
              text={"Trading strategies that really work – now they are yours."}
              icon={<BiTrophy size={"3em"} color="black" />}
            />

            <StatsCard
              title={"HIGH LEVERAGE"}
              text={`Chance to magnify your investment and really win big`}
              icon={<BsGraphUp size={"3em"} color="black" />}
            />
            <StatsCard
              title={"FAST EXECUTION"}
              text={`Super-fast trading so you never suffer slippage.`}
              icon={<IoMdFlash size={"3em"} color="black" />}
            />
            <StatsCard
              title={"LOW SPREADS"}
              text={`Trading strategies that really work – now they are yours.`}
              icon={<BsGrid3X3Gap size={"3em"} color="black" />}
            />
          </SimpleGrid>
        </Container>
      </Box> */}
      <Footer />
      <FloatingButton />
    </Box>
  );
}

export default About;
