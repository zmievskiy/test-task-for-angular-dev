import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addUsername',
})
export class AddUsernamePipe implements PipeTransform {
  transform(value: string): string {
    const credentials = localStorage.getItem('credentials');

    if (!credentials) {
      return value;
    }

    const { username } = JSON.parse(credentials);

    return `${value} ${username}`;
  }
}
