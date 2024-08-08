import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate',
  standalone: true
})
export class ConvertDatePipe implements PipeTransform {

  transform(value: number, formatType?: string): string {
    const date = new Date(value * 1000);

    const fullOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const shortOptions: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

    if (formatType === 'full') {
      // Format as "Wednesday, January 10, 2024"
      return date.toLocaleDateString('en-US', fullOptions);
    } else if (formatType === 'custom') {
      // Format as "Wednesday, 21, Jan"
      const weekdayOptions: Intl.DateTimeFormatOptions = { weekday: 'long' };
      const dayOptions: Intl.DateTimeFormatOptions = { day: 'numeric' };
      const monthOptions: Intl.DateTimeFormatOptions = { month: 'short' };

      const weekday = date.toLocaleDateString('en-US', weekdayOptions);
      const day = date.toLocaleDateString('en-US', dayOptions);
      const month = date.toLocaleDateString('en-US', monthOptions);

      return `${weekday}, ${day}, ${month}`;
    } else {
      // Default format as "Jan 21"
      return date.toLocaleDateString('en-US', shortOptions);
    }
  }
}
