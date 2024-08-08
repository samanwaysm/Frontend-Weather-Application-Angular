import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertFToC',
  standalone: true
})
export class ConvertFToCPipe implements PipeTransform {

  transform(value: number): number {
      return Math.round((value - 32) * 5 / 9);
  }

}
