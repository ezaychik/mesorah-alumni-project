import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notNull'
})
export class NotNullPipe implements PipeTransform {

  transform(inputs: any): any {
    return inputs.filter(input => input != null);
  }

}
