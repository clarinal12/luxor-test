import { gql } from "@apollo/client";

export const POKEMONS = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
    }
  }
`;

export const POKEMON = gql`
  query Pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      image
      classification
      weaknesses
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      evolutions {
        id
        name
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
