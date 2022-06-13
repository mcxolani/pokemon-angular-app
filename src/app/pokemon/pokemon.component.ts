import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
	search: string = '';
	error: string = '';
	loading: boolean = true;
	pokemon: Pokemon[] = [];

	constructor(private pokemonService: PokemonService) { }

	ngOnInit(): void {
		this.getAllPokemon();
	}

	getAllPokemon() {
		this.pokemonService.getAllPokemon().subscribe({
			next: (pokemon: Pokemon[]) => {
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
