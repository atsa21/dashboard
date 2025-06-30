import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '@core/models';

@Pipe({
  name: 'nameInitials'
})
export class NameInitialsPipe implements PipeTransform {
  transform(value: UserModel): string {
    const name = value?.name?.[0] || '';
    const last = value?.last_name?.[0] || '';
    return (name + last).toUpperCase();
  }

}
