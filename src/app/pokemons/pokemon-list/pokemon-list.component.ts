import {Component, OnInit} from '@angular/core';
import {PokemonServiceService} from '../pokemon-service.service';
import {PokemonListItem} from '../models/pokemon-list';
import {IInfiniteScrollEvent} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public cache: PokemonListItem[] = [];
  private displayed: PokemonListItem[] = [];

  private nbPerRequest = 10;
  private nbItems = 0;
  private scrollAvailable = true;

  public searchKeyWord = '';

  constructor(
    private pokemonService: PokemonServiceService
  ) {
  }

  ngOnInit() {
    this.getNextPokemons(15);
  }

  displayCache() {
    this.displayed = this.cache;
  }

  getNextPokemons(n?: number) {
    if (!n) {
      n = this.nbPerRequest;
    }
    this.pokemonService.getPokemons(this.nbItems, n).subscribe(o => {
      this.cache = this.cache.concat(o.data);
      this.nbItems += o.data.length;
      this.displayCache();
    });
  }

  searchPokemons(search) {
    this.pokemonService.getPokemons(0, 10, search).subscribe(o => {
      this.displayed = o.data;
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

  inputSearchChanges() {
    if (this.searchKeyWord) {
      console.log(this.searchKeyWord);
      this.searchPokemons(this.searchKeyWord);
    } else {
      this.displayCache();
    }
  }
}
