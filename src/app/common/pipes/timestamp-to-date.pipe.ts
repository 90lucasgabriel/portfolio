import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: any, format?: any): string {
    return moment.unix(value.seconds).format(format?format:'DD/MM/YYYY');

}

}
