import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const temp = ( value - 273 ) ;

    return `${Math.round(temp)}° C`;
  }
}
