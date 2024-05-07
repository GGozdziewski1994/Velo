import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed',
  standalone: true,
})
export class TimeElapsedPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '0';

    const pastDate = new Date(value);

    const currentDate = new Date();
    const difference = currentDate.getTime() - pastDate.getTime();

    if (difference < 1000 * 60 * 60) {
      const minutesElapsed = Math.floor(difference / (1000 * 60));
      return `${minutesElapsed} ${minutesElapsed === 1 ? 'minutę' : minutesElapsed >= 2 && minutesElapsed < 5 ? 'minuty' : 'minut'}`;
    } else if (difference < 1000 * 60 * 60 * 24) {
      const hoursElapsed = Math.floor(difference / (1000 * 60 * 60));
      return `${hoursElapsed} ${hoursElapsed === 1 ? 'godzinę' : 'godzin'}`;
    } else {
      const daysElapsed = Math.floor(difference / (1000 * 60 * 60 * 24));
      return `${daysElapsed} ${daysElapsed === 1 ? 'dzień' : 'dni'}`;
    }
  }
}
