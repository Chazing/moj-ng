import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'mojFormatByType'
})
export class MojFormatByTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value.getDate != undefined) {
      var datePipe = new DatePipe('en-US');
      return datePipe.transform(value, 'dd/MM/yyyy');
    }
    return value;
  }

}
