import React from "react";
import { Spinner, Flex } from "@chakra-ui/react";

function Loading({ loading }) {
  return (
    <>
      {
        <Flex
          h="100vh"
          w="full"
          justifyContent="center"
          alignItems="center"
          bg="rgb(18, 29, 51)"
        >
          <Spinner color="white" fontSize={36}  />
        </Flex>
      }
    </>
  );
}

export default Loading;
