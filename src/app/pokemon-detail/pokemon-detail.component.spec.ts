import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPokemonService, p } from '../pokemon/pokemon.component.spec';
import { PokemonService } from '../pokemon/pokemon.service';
import { Observable, of } from 'rxjs';
import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  let service: PokemonService;
  let spy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [PokemonDetailComponent],
      providers: [{ provide: PokemonService, useClass: MockPokemonService }]
    })
      .compileComponents();


    service = TestBed.inject(PokemonService);


    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load pokemon from back end', () => {
    // spy = spyOn(service, 'getPokemon').and.returnValue(of(p));

    // expect(spy).toHaveBeenCalled();
    expect(component.loading).toEqual(false);
    expect(component.error).toEqual('');
    expect(component.pokemon?.name).toEqual('name of pokemon on deatail');
  });

  it('should load pokemon with error', () => {
    // spy = spyOn(service, 'getPokemon').and.throwError('error could not load pokemon');

    // expect(service.getPokemon).toHaveBeenCalled();
    expect(component.loading).toEqual(false);
    expect(component.error).toEqual('');
    expect(component.pokemon?.name).toEqual('name of pokemon on deatail');
  });
});
