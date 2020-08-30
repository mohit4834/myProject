import { NgModule } from '@angular/core';
import { StatusFilterPipe } from './Pipes/status-filter.pipe';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [StatusFilterPipe],
  exports: [StatusFilterPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
