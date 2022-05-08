import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiDownload,
  FiBookOpen,
  FiCreditCard,
  FiHeadphones,
  FiLogOut,
} from "react-icons/fi";
import Link from "next/link";
import { BiHomeSmile, BiMoney, BiCreditCard, BiHistory } from "react-icons/bi";
import { IconType } from "react-icons";
import { ReactText } from "react";

import { SiEclipseche } from "react-icons/si";
import helpers from "../../helpers";
import { useRouter } from "next/router";

const LinkItems = [
  { name: "Dashboard", icon: BiHomeSmile, href: "/app" },
  { name: "Deposit", icon: BiMoney, href: "/app/deposit" },
  { name: "Invest", icon: FiTrendingUp, href: "/app/invest" },
  { name: "Withdraw", icon: BiCreditCard, href: "/app/withdraw" },
  { name: "Transactions", icon: BiHistory, href: "/app/transactions" },
  { name: "Support", icon: FiHeadphones, href: "/app/support" },
];

export default function DashboardWrapper({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("#131722", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="md"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
      •••••••
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#131722", "gray.900")}
      color="white"
      borderRightWidth="thin"
      borderRightColor="gray.700"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <SiEclipseche size={40} color="#4299e1" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.href}>
          {link.name}
        </NavItem>
      ))}

      <Flex
        align="center"
        p="4"
        mx="4"
        gap={2}
        mt={20}
        role="group"
        cursor="pointer"
        onClick={() => helpers.logout()}
        _hover={{
          color: "blue.400",
        }}
      >
        <FiLogOut fontSize={25} />
        <Text>Logout</Text>
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, children, link, ...rest }) => {
  return (
    <Link
      href={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      passHref
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        role="group"
        cursor="pointer"
        _hover={{
          color: "blue.400",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="24"
            _groupHover={{
              color: "blue.400",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const router = useRouter();
  const user = helpers.getUserDetailsFromLocalStorage();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      shadow="lg"
      bg={useColorModeValue("blue.400", "gray.900")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="ghost"
        aria-label="open menu"
        icon={<FiMenu size={25} color="white" />}
      />

      <SiEclipseche size={40} color="white" />

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell size={25} color="white" />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" color="white">
                    {user.firstName} {user.lastName}
                  </Text>
                  <Text fontSize="xs" color="white">
                    Member
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  helpers.logout();
                  router.replace("/");
                }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
