import {
  Avatar,
  Box,
  BoxProps,
  HStack,
  Text,
  useBreakpointValue,
  useRadio,
  useRadioGroup,
  UseRadioProps,
  VStack,
} from "@chakra-ui/react";
import { ArrayElement, Pokemons } from "types";

interface RadioCardProps extends UseRadioProps {
  pokemon: ArrayElement<Pokemons>;
}

const RadioCard: React.FC<RadioCardProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const { image, number, name } = props.pokemon;

  return (
    <Box as="label" fontSize="18px" bgColor="grayLight" rounded="6px">
      <input {...input} />
      <HStack
        {...checkbox}
        cursor="pointer"
        rounded="6px"
        px="27px"
        py="16px"
        spacing="10px"
        _checked={{
          borderColor: "brandPrimary",
          borderWidth: "1px",
        }}
      >
        <Avatar boxSize="44px" src={image} mr="16px" />
        <Text color="brandPrimary" fontWeight="700">
          {number}
        </Text>
        <Text color="white" fontWeight="600">
          {name}
        </Text>
      </HStack>
    </Box>
  );
};

interface PokemonList extends BoxProps {
  pokemons: Pokemons;
  value: string;
  onPokemonChange?: (value: string) => void;
}

export const PokemonList: React.FC<PokemonList> = ({
  pokemons,
  onPokemonChange,
  value,
  ...rest
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "pokemon",
    defaultValue: "",
    value,
    onChange: (value) => {
      if (onPokemonChange) {
        onPokemonChange(value);
      }
    },
  });
  const group = getRootProps();

  return (
    <Box
      py={useBreakpointValue({ base: "32px", md: "64px" })}
      pl={useBreakpointValue({ base: "25px", md: "52px" })}
      pr={useBreakpointValue({ base: "30px", md: "76px" })}
      {...rest}
    >
      <VStack spacing="15px" align="stretch" {...group}>
        {pokemons.map((pokemon) => {
          const radio = getRadioProps({ value: pokemon.id });
          return <RadioCard {...radio} key={pokemon.id} pokemon={pokemon} />;
        })}
      </VStack>
    </Box>
  );
};
