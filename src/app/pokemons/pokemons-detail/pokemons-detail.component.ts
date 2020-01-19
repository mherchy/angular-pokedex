import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {ActivatedRoute} from '@angular/router';
import {PokemonServiceService} from '../pokemon-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pokemons-detail',
  templateUrl: './pokemons-detail.component.html',
  styleUrls: ['./pokemons-detail.component.scss']
})
export class PokemonsDetailComponent implements OnInit {

  public pokemon: Pokemon;

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonServiceService,
    public location: Location
  ) {
  }

  ngOnInit() {
    console.log('init pokemon detail');

    this.router.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.pokemonService.getPokemon(id).subscribe(p => this.pokemon = p);
    });
  }

  private oldGetPokemon() {
    const id = +this.router.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id).subscribe(p => this.pokemon = p);
  }

  get artworkUrl() {
    return 'assets/img/official-artwork/' + this.pokemon.id + '.png';
  }

  get soundUrl() {
    return 'assets/audio/' + this.pokemon.id + '.mp3';
  }

}
