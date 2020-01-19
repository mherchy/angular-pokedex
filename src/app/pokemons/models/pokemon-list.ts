import {RankedItem} from './item';

export type PokemonListItem = RankedItem;

export interface PokemonList {
  data: PokemonListItem[];
}
