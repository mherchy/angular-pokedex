import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonsDetailComponent } from './pokemons-detail/pokemons-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {HttpClientModule, HttpRequest} from '@angular/common/http';
import {
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatButtonModule,
  MatIconModule, MatSidenavModule, MatInputModule
} from '@angular/material';
import {PokedexComponent} from './pokedex/pokedex.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [PokemonListComponent, PokemonsDetailComponent, PokedexComponent],
  exports: [
    PokemonListComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule
  ]
})
export class PokemonsModule { }
