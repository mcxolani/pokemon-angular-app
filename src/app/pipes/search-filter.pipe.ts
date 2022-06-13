import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Pokemon[], search = ''): unknown {
    return null;
  }

}
