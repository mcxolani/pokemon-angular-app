import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonService } from '../pokemon/pokemon.service';

@NgModule({
  declarations: [
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonDetailModule { }
