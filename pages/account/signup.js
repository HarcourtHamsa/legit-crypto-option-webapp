import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Checkbox,
  useBreakpointValue,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { countries } from "../../countries";
import FloatingButton from "../../components/FloatingButton";
import { useFormik } from "formik";
import helpers from "../../helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SiEclipseche } from "react-icons/si";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const notify = (msg, type) =>
    toast(msg, {
      type,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
    });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      country: "",
    },

    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const res = await helpers
          .register(values)
          .then((data) => {
            console.log(data);

            if (data.name === "AxiosError") {
              notify("Email already taken", "error");
            } else {
              notify("Account created successfully!", "success");
              router.push("/account/login");
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      } catch (error) {
        console.log(error);
        notify("Oops! an error occured");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Signup - Expert Hub Trade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("#131722", "gray.800")}
      >
        <ToastContainer />

        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={8}>
          <Stack align={"center"}>
            <SiEclipseche size={40} color="#4299e1" />
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            // boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={6}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        p={"6"}
                        w="full"
                        id="first-name"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        p={"6"}
                        id="last-name"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    p={"6"}
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </FormControl>
                <FormControl mb={6} isRequired>
                  <FormLabel>Country</FormLabel>
                  <Select
                    placeholder=""
                    id="country"
                    name="country"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                  >
                    {countries.map((country) => {
                      return (
                        <option value={country.name} key={country.code}>
                          {country.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      p={"6"}
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                    mt={4}
                  >
                    <Checkbox>I Accept The Terms And Privacy Policy</Checkbox>
                  </Stack>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    size="lg"
                    bg={"blue.400"}
                    fontWeight="normal"
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Create account
                  </Button>
                </Stack>
                <Stack pt={2}>
                  <Text>
                    Already have an account?{" "}
                    <Link href="/account/login" color={"blue.400"}>
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>

      <FloatingButton />
    </>
  );
}