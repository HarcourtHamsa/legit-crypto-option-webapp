import React from "react";
import Head from "next/head";
import {
  Box,
  SimpleGrid,
  Stack,
  Stat,
  useColorModeValue,
  StatLabel,
  StatNumber,
  Divider,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { IoIosAdd, IoIosCompass } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import DashboardWrapper from "../../components/app/DashboardWrapper";
import Statistics from "../../components/app/Statistics";
import FloatingButton from "../../components/FloatingButton";

import { TickerTape } from "react-ts-tradingview-widgets";
import WithAuth from "../../HOCs/WithAuth";

const InvestmentPlanCard = ({
  title,
  priceRange,
  dailyProfit,
  minimumAmount,
  duration,
  minimumReturn,
}) => {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      //   border={"1px solid"}
      borderColor={useColorModeValue(
        "-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))",
        "gray.500"
      )}
      rounded={"lg"}
      bg="-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))"
      color="white"
      fontWeight="bold"
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {priceRange}
      </StatNumber>
      <Divider />

      <VStack textAlign="start" pt={2} w="100%">
        <List spacing={3} textAlign="start" w="inherit">
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Daily Profit: %{dailyProfit}
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Minimum Possible Deposit: ${minimumAmount}
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Minimum Return: ${minimumReturn}
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Duration: {duration}
          </ListItem>
        </List>
        <Box w="80%" pt={7}>
          <Button
            w="full"
            colorScheme="blue"
            variant="solid"
            fontWeight="normal"
          >
            Start trial
          </Button>
        </Box>
      </VStack>
    </Stat>
  );
};

function invest() {
  return (
    <div>
      <DashboardWrapper>
        <Head>
          <title>Dashboard - Legit Crypto Option</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Statistics /> */}

        <Box mx={"auto"} pt={5}>
          <Container
            maxW="7xl"
            mx={"auto"}
            pt={5}
            px={{ base: 2, sm: 12, md: 17 }}
          >
            <Statistics />
            <TickerTape colorTheme="dark"></TickerTape>

            <Heading
              lineHeight={"110%"}
              fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
              mb={5}
              color="white"
              display="flex"
              gap={2}
            >
              <Text>Invest in a Plan</Text>
              <IoIosCompass size={30} />
            </Heading>

            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: 5, lg: 8 }}
            >
              <InvestmentPlanCard
                title={"Basic Plan"}
                priceRange={"$1,000 - $5.000"}
                minimumAmount={"1,000"}
                dailyProfit={"5.00"}
                duration={"2 Weeks"}
                minimumReturn={"2,010"}
              />
              <InvestmentPlanCard
                title={"Silver Plan"}
                priceRange={"$5,000 - $10,000"}
                minimumAmount={"5,000"}
                dailyProfit={"7.00"}
                duration={"1 Month"}
                minimumReturn={"5,560"}
              />
              <InvestmentPlanCard
                title={"Gold Plan"}
                priceRange={"$10,000 - $15,000"}
                minimumAmount={"10,000"}
                dailyProfit={"9.00"}
                duration={"3 Months"}
                minimumReturn={"9,200"}
              />
            </SimpleGrid>
          </Container>
        </Box>
      </DashboardWrapper>

      <FloatingButton />
    </div>
  );
}

export default WithAuth(invest);
