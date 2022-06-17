import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { SearchFilterPipeModule } from '../pipes/search-filter.pipe.module';
import { Pokemon } from './pokemon';

import { PokemonComponent } from './pokemon.component';
import { PokemonService } from './pokemon.service';

export const pokemon = [{
  id: 1,
  name: "name of pokemon",
  image: "url of image"

}, {
  id: 2,
  name: "name of pokemon",
  image: "url of image"
}];

export const p = {
  id: 1,
  name: "name of pokemon on deatail",
  image: "url of image"
};

export class MockPokemonService {


  getAllPokemon = (): Observable<Pokemon[]> => {

    const all: Observable<any> = of(pokemon);
    return all;
  };

  getPokemon(name: string): Observable<Pokemon> {

    const pokemon: Observable<Pokemon> = of(p);
    return pokemon;
  }


}
describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let service: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule,
        SearchFilterPipeModule,
        FormsModule],
      declarations: [PokemonComponent],
      providers: [{ provide: PokemonService, useClass: MockPokemonService }]
    })
      .compileComponents();

    service = TestBed.inject(PokemonService);

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load list of data from backend', () => {
    expect(component.loading).toEqual(false);
    expect(component.error).toEqual('');
    expect(component.pokemon.length).toEqual(2);
    expect(component.search).toEqual('');
  });

});
