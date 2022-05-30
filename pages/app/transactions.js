import React, { useEffect, useState } from "react";
import Head from "next/head";
import DashboardWrapper from "../../components/app/DashboardWrapper";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Table,
  TableContainer,
  Tr,
  Td,
  Th,
  Tbody,
  Thead,
  Tfoot,
} from "@chakra-ui/react";
import { IoIosClock } from "react-icons/io";
import FloatingButton from "../../components/FloatingButton";
import WithAuth from "../../HOCs/WithAuth";
import helpers from "../../helpers";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  // componentDidMount
  useEffect(() => {
    async function getTx() {
      await helpers
        .getTransactions()
        .then((data) => setTransactions(data.data.data));
    }

    getTx();
  }, []);

  return (
    <div>
      <DashboardWrapper>
        <Head>
          <title>Dashboard - Legit Crypto Option</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Heading
          lineHeight={"110%"}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          mb={5}
          color="white"
          fontWeight="bold"
          display="flex"
          gap={2}
          mt={5}
        >
          <Text>Transaction History</Text><IoIosClock size={30}/>
        </Heading>
        <Box
          h={"fit-content"}
          // px={{ base: 2, md: 4 }}
          // py={"5"}
          shadow={"xl"}
          //   border={"1px solid"}
          borderColor={useColorModeValue("gray.800", "gray.500")}
          // rounded={"lg"}
        >
          <TableContainer>
            <Table variant="unstyled" color="blue.200">
              <Thead color="white">
                <Tr>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                  <Th>Payment Method</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions.map((tx) => {
                  return (
                    <Tr key={Math.random()}>
                      <Td>${tx?.amount}</Td>
                      <Td>success</Td>
                      <Td>{tx?.method}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </DashboardWrapper>

      <FloatingButton />
    </div>
  );
}

export default WithAuth(Transactions);
