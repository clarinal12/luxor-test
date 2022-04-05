export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export interface PokemonDimension {
  minimum: string;
  maximum: string;
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonAttack {
  fast: Attack[];
  special: Attack[];
}

export type Pokemons = {
  id: string;
  number: number;
  name: string;
  image: string;
}[];

export interface Pokemon {
  id: string;
  number: number;
  name: string;
  image: string;
  classification: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  evolutions: {
    id: string;
    name: string;
  }[];
  attacks: PokemonAttack;
  weaknesses: string[];
}
