import React from "react";
import { Box } from "@chakra-ui/react";
import { TickerTape } from "react-ts-tradingview-widgets";

function FixedBottom() {
  return (
    <Box pos="fixed" bottom="-10" left="0" right="0">
      <TickerTape colorTheme="light"></TickerTape>
    </Box>
  );
}

export default FixedBottom;
