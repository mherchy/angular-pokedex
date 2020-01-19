import {Injectable} from '@angular/core';
import {Pokemon} from './models/pokemon';
import {PokemonList} from './models/pokemon-list';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private url = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';

  constructor(
    private http: HttpClient
  ) {
  }

  getPokemons(p?, n?): Observable<PokemonList> {
    return this.http.get<PokemonList>(this.url);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + `/${id}`);
  }


}
