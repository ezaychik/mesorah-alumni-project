import { Pipe, PipeTransform } from '@angular/core';
import { AlumnaLocation } from '../models/location.model';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(allLocations: AlumnaLocation[], property: string): any {
    return [...Array.from(new Set(allLocations.map(location => location[property])))];
  }

}
