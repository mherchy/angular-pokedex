import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsDetailComponent} from './pokemons/pokemons-detail/pokemons-detail.component';
import {PokemonListComponent} from './pokemons/pokemon-list/pokemon-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
