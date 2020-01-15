import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsDetailComponent} from './pokemons/pokemons-detail/pokemons-detail.component';


const routes: Routes = [
  {path: 'pokemon/:id', component: PokemonsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
