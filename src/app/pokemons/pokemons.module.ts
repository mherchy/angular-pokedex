import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatListModule} from '@angular/material/list';
import { PokemonsDetailComponent } from './pokemons-detail/pokemons-detail.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [PokemonListComponent, PokemonsDetailComponent],
  exports: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    AppRoutingModule
  ]
})
export class PokemonsModule { }
