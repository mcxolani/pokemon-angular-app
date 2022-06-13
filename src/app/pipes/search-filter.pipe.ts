import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Pokemon[], search = ''): Pokemon[] {
    if (!search.trim()) {
      return value;
    }

    return value.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
  }

}
