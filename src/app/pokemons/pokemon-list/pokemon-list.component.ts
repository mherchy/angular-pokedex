import { Component, OnInit } from '@angular/core';
import {PokemonServiceService} from '../pokemon-service.service';
import {Pokemon} from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: Pokemon[];

  constructor(
    private pokemonService: PokemonServiceService
  ) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }

}
