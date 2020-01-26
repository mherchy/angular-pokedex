import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonsDetailComponent } from './pokemons-detail/pokemons-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {HttpClientModule, HttpRequest} from '@angular/common/http';
import {
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';



@NgModule({
  declarations: [PokemonListComponent, PokemonsDetailComponent],
  exports: [
    PokemonListComponent
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
    InfiniteScrollModule
  ]
})
export class PokemonsModule { }
