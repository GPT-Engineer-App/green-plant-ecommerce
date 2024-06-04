import React from "react";
import { Box, Container, Flex, HStack, Icon, IconButton, Image, Input, Link, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaFacebook, FaHome, FaPhone, FaSearch, FaShoppingBag, FaSkype, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdClose, MdOutlineAccessTime } from "react-icons/md";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.100" py={2}>
        <Flex justify="space-between" align="center" px={4}>
          <Text>Welcome to BeGreen - Best Plant</Text>
          <HStack spacing={4}>
            <Flex align="center">
              <Icon as={FaHome} mr={2} />
              <Text>69 North Cleveland, Memphis</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaPhone} mr={2} />
              <Text>+ 46 234-623-213</Text>
            </Flex>
            <Flex align="center">
              <Icon as={MdOutlineAccessTime} mr={2} />
              <Text>Mon - Fri: 9.00am - 8.00pm</Text>
            </Flex>
          </HStack>
        </Flex>
      </Box>

      <Box display={{ base: "block", md: "none" }} py={2} px={4}>
        <Flex justify="space-between" align="center">
          <IconButton icon={<FaBars />} aria-label="Open Menu" />
          <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTcxNzQ4Nzg5Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="logo" boxSize="50px" />
          <HStack spacing={4}>
            <IconButton icon={<FaSearch />} aria-label="Search" />
            <IconButton icon={<FaShoppingBag />} aria-label="Cart" />
          </HStack>
        </Flex>
      </Box>

      <Box display={{ base: "none", md: "block" }} py={4}>
        <Flex justify="space-between" align="center" px={4}>
          <Image src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxsb2dvfGVufDB8fHx8MTcxNzQ4Nzg5Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="logo" boxSize="100px" />
          <HStack spacing={8}>
            <Link href="#">Home</Link>
            <Link href="#">MegaMenu</Link>
            <Link href="#">Services</Link>
            <Link href="#">Project</Link>
            <Link href="#">Shop</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Page</Link>
          </HStack>
          <HStack spacing={4}>
            <Flex align="center">
              <Input placeholder="Enter keyword to search" />
              <IconButton icon={<FaSearch />} aria-label="Search" />
            </Flex>
            <IconButton icon={<FaShoppingBag />} aria-label="Cart" />
          </HStack>
        </Flex>
      </Box>

      <Box bg="gray.200" py={4} px={4}>
        <VStack spacing={4} align="center">
          <Image src="https://images.unsplash.com/photo-1553096442-8fe2118fb927?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2VtZW50fGVufDB8fHx8MTcxNzQ4Nzg5Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="advertisement" />
          <Text fontSize="2xl">Be Green</Text>
          <Text textAlign="center">I love life and the unique position of being a working artist. I love the thrill of the hunt and am an avid vintage hound, sniffing out the best one-of-a-kinds.</Text>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaSkype} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaYoutube} boxSize={6} />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
