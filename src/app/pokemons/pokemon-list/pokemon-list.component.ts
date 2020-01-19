import { Component, OnInit } from '@angular/core';
import {PokemonServiceService} from '../pokemon-service.service';
import {PokemonListItem} from '../models/pokemon-list';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: PokemonListItem[];

  constructor(
    private pokemonService: PokemonServiceService
  ) { }

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemons().subscribe(o => this.pokemons = o.data);
  }

  getSpriteUrl(id: number) {
    return 'assets/img/sprites/' + id + '.png';
  }

}
