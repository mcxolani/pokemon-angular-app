import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any | undefined;
  error = '';
  loading: boolean = true;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    const name = this.route.snapshot.paramMap.get('name') || '';
    this.pokemonService.getPokemon(name).subscribe({
      next: (pokemon: any) => {
        this.pokemon = pokemon;
      },
      error: (err) => {
        this.error = err.message;
        console.log(err);
      },
      complete: () => {
        this.loading = false;
        console.log('complete');
      }
    });
  }

}
