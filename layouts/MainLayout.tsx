import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Flex
      justify="center"
      align="flex-start"
      h="100vh"
      w="100vw"
      bgColor="grayLighter"
      p={useBreakpointValue({ base: "60px 30px", md: "126px 78px" })}
    >
      <Box
        w="full"
        overflow="hidden"
        maxW="1198px"
        bgColor="gray"
        rounded="8px"
      >
        {children}
      </Box>
    </Flex>
  );
};
