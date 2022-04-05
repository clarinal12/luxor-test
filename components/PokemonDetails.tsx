import { useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { POKEMON } from "graphql/queries";
import { Pokemon } from "types";

interface PokemonDetails {
  id: string;
}

export const PokemonDetails: React.FC<PokemonDetails> = ({ id }) => {
  const { data = {}, loading } = useQuery(POKEMON, {
    variables: { id },
  });

  const { pokemon }: { pokemon: Pokemon | undefined } = data;

  const spaceBetweenStyle = {
    align: "center",
    justify: "space-between",
  };

  return (
    <Box color="white" w="full" h="full">
      <Flex
        p={{ base: "20px", md: "42px" }}
        borderBottomWidth="2px"
        borderColor="grayDark"
        fontSize="32px"
        fontWeight="600"
        {...spaceBetweenStyle}
      >
        <Text>{pokemon?.name}</Text>
        <Text color="brandPrimary">#{pokemon?.number}</Text>
      </Flex>
      <Box p={{ base: "20px", md: "42px" }}>
        <Center>
          <Avatar showBorder src={pokemon?.image} boxSize="200px" />
        </Center>
        {loading ? (
          <Center mt="32px">
            <Spinner color="brandPrimary" />
          </Center>
        ) : (
          <VStack
            align="stretch"
            mt="32px"
            px={{ base: "0px", md: "42px" }}
            spacing="20px"
          >
            <Flex {...spaceBetweenStyle}>
              <Text>Classification</Text>
              <Text fontWeight="700">{pokemon?.classification}</Text>
            </Flex>
            <Flex {...spaceBetweenStyle}>
              <Text>Height</Text>
              <Text fontWeight="700">
                {pokemon?.height.minimum} - {pokemon?.height.maximum}
              </Text>
            </Flex>
            <Flex {...spaceBetweenStyle}>
              <Text>Weight</Text>
              <Text fontWeight="700">
                {pokemon?.weight.minimum} - {pokemon?.weight.maximum}
              </Text>
            </Flex>
            <Flex {...spaceBetweenStyle}>
              <Text>Evolutions</Text>
              <HStack>
                {pokemon?.evolutions ? (
                  (pokemon?.evolutions).map((item, idx) => (
                    <Box key={item.id}>
                      <Text fontWeight="700">
                        {idx !== 0 ? <>&rarr; </> : null} {item.name}
                      </Text>
                    </Box>
                  ))
                ) : (
                  <Text fontWeight="700">No available</Text>
                )}
              </HStack>
            </Flex>
            <Flex {...spaceBetweenStyle}>
              <Text>Weaknesses</Text>
              <Text fontWeight="700">
                {(pokemon?.weaknesses || []).toString()}
              </Text>
            </Flex>
          </VStack>
        )}
      </Box>
    </Box>
  );
};
