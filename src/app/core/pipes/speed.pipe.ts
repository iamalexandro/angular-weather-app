import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} m/s`;
  }
}
