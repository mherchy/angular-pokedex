import {Injectable} from '@angular/core';
import {Pokemon} from './models/pokemon';
import {PokemonList} from './models/pokemon-list';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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

  getPokemons(offset, limit, search?: string): Observable<PokemonList> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: new HttpParams({fromObject: {offset, limit}})
    };
    if (search) {
      httpOptions.params = httpOptions.params.append('search', search);
    }
    return this.http.get<PokemonList>(this.url, httpOptions);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + `/${id}`);
  }


}
