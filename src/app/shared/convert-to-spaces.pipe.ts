import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
/* Orjinal default gelen deger
  transform(value: any, ...args: any[]): any {
    return null;
  }
*/
  transform(value: string, character: string): string {
    return value.replace(character, ' ');//pipe ile gonderilen degeri ' ' bosluga cevirecek
  }
}
