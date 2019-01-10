import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
    name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): string {
      let today = moment();
      let birthdate = moment(value, 'DD/MM/YYYY');
      let years = today.diff(birthdate, 'years');
      let html:string = years + '';// + " anos ";

      //html += today.subtract(years, 'years').diff(birthdate, 'months') + " mo";

      return html;
  }

}