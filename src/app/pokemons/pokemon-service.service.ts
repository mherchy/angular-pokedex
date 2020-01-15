import { Injectable } from '@angular/core';
import POKEMON from './fixture';
import {Pokemon} from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  // 'https://www.getpostman.com/collections/a741976ce21e3e2b69fc';

  constructor() { }

  getPokemons(): Pokemon[] {
    return POKEMON.data;
  }

  getPokemon(id: number): Pokemon {
    return POKEMON.data.find( p => p.id === id);
  }


}
