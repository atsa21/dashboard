import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== 'number') {
      return '';
    }
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(1)}M`;
    }
    if (value >= 100_000) {
      return `$${Math.round(value / 1_000)}K`;
    }
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}
