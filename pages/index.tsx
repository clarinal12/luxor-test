import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex
      justify="center"
      align="center"
      h="100vh"
      w="100vw"
      bgColor="grayDarker"
    >
      <Link href="/login">
        <a>
          <Button colorScheme="yellow" variant="link">
            Login Page
          </Button>
        </a>
      </Link>
    </Flex>
  );
};

export default Home;
