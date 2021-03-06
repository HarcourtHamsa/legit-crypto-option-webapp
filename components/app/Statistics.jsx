import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  BsCreditCard,
  BsDownload,
  BsServer,
  BsPeopleFill,
} from "react-icons/bs";

import {
  IoIosHome,
  IoIosAddCircle,
  IoIosCompass,
  IoIosCard,
  IoIosClock,
  IoIosHeadset,
  IoIosLogOut,
  IoIosCodeDownload,
} from "react-icons/io";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import helpers from "../../helpers";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      fontWeight="bold"
      //   border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
      bg="-webkit-gradient(linear,left top,left bottom,from(#2b525a),to(#072427))"
      color="white"
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"bold"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"bold"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statistics() {
  const user = helpers.getUserDetailsFromLocalStorage();

  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Deposited"}
          stat={`$${user.amountDeposited}`}
          icon={<IoIosCodeDownload size={"3em"} color="white" />}
        />
        <StatsCard
          title={"Profit"}
          stat={`$${user.profit}`}
          icon={<BsServer size={"3em"} color="white" />}
        />
        <StatsCard
          title={"Balance"}
          stat={`$${user.balance}`}
          icon={<IoIosCard size={"3em"} color="white" />}
        />
        <StatsCard
          title={"Ref. Bonus"}
          stat={`$${user.referalBonus}`}
          icon={<BsPeopleFill size={"3em"} color="white" />}
        />
      </SimpleGrid>
    </Box>
  );
}
