import {
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Swiper from "react-id-swiper";

interface PaginationProps extends FlexProps {
  limit: number;
  total: number;
  onPageChange: (value: number) => void;
  value: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  limit,
  total,
  onPageChange,
  value,
}) => {
  const numberOfButtons = Math.ceil(total / limit);

  const swiperParams = {
    slidesPerView: "auto",
    spaceBetween: 8,
    freeMode: true,
  };

  return (
    <Flex
      h="75px"
      zIndex={1}
      position="absolute"
      bottom="0"
      left="0"
      p="20px"
      bgColor="brandBlack"
      w="full"
      align="center"
      justify="space-between"
      flexWrap="wrap"
    >
      <Box
        w={useBreakpointValue({ base: "150px", md: "250px" })}
        pos="relative"
      >
        <Swiper {...swiperParams}>
          {Array(numberOfButtons)
            .fill("")
            .map((_, idx) => (
              <Button
                size="sm"
                key={idx}
                variant={value === idx ? "primary" : "black"}
                onClick={() => onPageChange(idx)}
              >
                {idx + 1}
              </Button>
            ))}
        </Swiper>
      </Box>
      <HStack spacing="10px">
        <Button
          size="sm"
          w={useBreakpointValue({ base: "50px", md: "80px" })}
          isDisabled={value === 0}
          onClick={() => {
            onPageChange(value - 1);
          }}
        >
          Prev
        </Button>
        <Button
          size="sm"
          w={useBreakpointValue({ base: "50px", md: "80px" })}
          isDisabled={value === numberOfButtons - 1}
          onClick={() => {
            onPageChange(value + 1);
          }}
        >
          Next
        </Button>
      </HStack>
    </Flex>
  );
};
