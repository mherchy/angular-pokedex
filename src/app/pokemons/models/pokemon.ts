import {PokemonListItem} from './pokemon-list';

export interface Pokemon extends PokemonListItem {
  type: any;
  description: string;
  height: number;
  weight: number;
  types: string[];
}
