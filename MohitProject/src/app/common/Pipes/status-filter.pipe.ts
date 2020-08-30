import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(allItems, field, status) {
    return allItems.filter(item => (item[field] === status || status === 'None'));
  }

}
