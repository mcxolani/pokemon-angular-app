import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/pokemon';

  getAllPokemon() {
    return this.http.get(this.url);
  }

  getPokemon(name: string) {
    return this.http.get(`${this.url}/${name}`);
  }
}
