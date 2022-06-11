import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon.component';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
