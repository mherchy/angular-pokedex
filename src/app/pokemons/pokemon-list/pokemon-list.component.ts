import { Component, OnInit } from '@angular/core';
import {PokemonServiceService} from '../pokemon-service.service';
import {PokemonListItem} from '../models/pokemon-list';
import {IInfiniteScrollEvent} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: PokemonListItem[] = [];
  private nbPerRequest = 10;
  private nbItems = 0;
  private scrollAvailable = true;

  constructor(
    private pokemonService: PokemonServiceService
  ) { }

  ngOnInit() {
    this.getNextPokemons();
  }

  getNextPokemons() {
    this.pokemonService.getPokemons(this.nbItems, this.nbPerRequest).subscribe(o => {
      this.pokemons = this.pokemons.concat(o.data);
      this.nbItems += this.nbPerRequest;
    });
  }

  getSpriteUrl(id: number) {
    return 'assets/img/sprites/' + id + '.png';
  }

  onScroll() {
    if (this.scrollAvailable) {
      this.scrollAvailable = false;
      this.getNextPokemons();
      this.scrollAvailable = true;
    }
  }
}
