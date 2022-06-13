import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon.component';
import { PokemonService } from './pokemon.service';
import { SearchFilterPipeModule } from '../pipes/search-filter.pipe.module';

@NgModule({
  declarations: [
    PokemonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SearchFilterPipeModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
