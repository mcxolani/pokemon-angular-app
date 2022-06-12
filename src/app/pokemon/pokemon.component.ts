import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
	error: string = '';
	loading: boolean = true;
	pokemon: any[] = [];

	constructor(private pokemonService: PokemonService) { }

	ngOnInit(): void {
		this.getAllPokemon();
	}

	getAllPokemon() {
		this.pokemonService.getAllPokemon().subscribe({
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
