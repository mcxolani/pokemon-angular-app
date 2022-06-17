import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchFilterPipeModule } from '../pipes/search-filter.pipe.module';

import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule,
        SearchFilterPipeModule,
        FormsModule],
      declarations: [PokemonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
