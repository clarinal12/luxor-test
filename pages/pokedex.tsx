import {
  Box,
  Flex,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Pagination, PokemonDetails, PokemonList } from "components";
import client from "graphql/client";
import { POKEMONS } from "graphql/queries";
import { MainLayout } from "layouts/MainLayout";
import { ReactElement, useCallback, useMemo, useState } from "react";
import { Pokemons } from "types";

const PokeDex = ({ pokemons }: { pokemons: Pokemons }) => {
  const [pokemonId, setPokemonId] = useState(pokemons[0]?.id || "");
  const [offset, setOffset] = useState(0);

  const limit = 10;
  const pokemonList = useMemo(() => {
    return pokemons.slice(offset * limit, (offset + 1) * limit);
  }, [offset, pokemons]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const screensSize = useBreakpointValue({ base: "sm", md: "md" });

  const handlePokemonChange = useCallback(
    (id: string) => {
      setPokemonId(id);
      if (screensSize === "sm") {
        onOpen();
      }
    },
    [onOpen, screensSize]
  );

  return (
    <Flex>
      <Box
        w="full"
        bgColor="grayDark"
        pos="relative"
        maxW={useBreakpointValue({ base: "354px", md: "508px" })}
        h={useBreakpointValue({
          base: "550px",
          md: "737px",
        })}
      >
        <PokemonList
          w="full"
          position="absolute"
          top="0"
          left="0"
          overflowY="auto"
          h={useBreakpointValue({
            base: "calc(550px - 75px)",
            md: "calc(737px - 75px)",
          })}
          value={pokemonId}
          onPokemonChange={handlePokemonChange}
          pokemons={pokemonList}
        />
        <Pagination
          value={offset}
          limit={limit}
          total={pokemons.length}
          onPageChange={setOffset}
        />
      </Box>
      <Box
        flexGrow={1}
        display={useBreakpointValue({ base: "none", md: "block" })}
      >
        <PokemonDetails id={pokemonId} />
      </Box>
      {screensSize === "sm" && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor="gray">
            <ModalCloseButton color="white" />
            <ModalBody>
              <PokemonDetails id={pokemonId} />
            </ModalBody>
            <ModalFooter>
              <Button variant="black" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

PokeDex.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  try {
    const response = await client.query({
      query: POKEMONS,
      variables: { first: 1000 },
    });

    return {
      props: {
        pokemons: response?.data?.pokemons || [],
      },
      revalidate: 10,
    };
  } catch (error) {
    throw new Error(`Failed to fetch pokemons`);
  }
}

export default PokeDex;
