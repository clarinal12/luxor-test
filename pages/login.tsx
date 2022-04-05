import { Box, Flex } from "@chakra-ui/react";
import { LoginForm } from "components";
import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <Flex
      justify="center"
      align="center"
      h="100vh"
      w="100vw"
      bgColor="grayDarker"
    >
      <Box
        px={{ base: "32px", md: "64px" }}
        pt={{ base: "50px", md: "107px" }}
        pb={{ base: "45px", md: "99px" }}
        bgColor="grayDark"
        rounded="8px"
      >
        <Box w={{ base: "auto", md: "380px" }}>
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
