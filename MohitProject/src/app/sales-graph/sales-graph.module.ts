import { SalesGraphComponent } from './sales-graph.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesGraphRoutingModule } from './sales-graph-routing.module';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [SalesGraphComponent],
  imports: [
    SalesGraphRoutingModule,
    ChartModule,
    ToastModule,
    CommonModule
  ]
})
export class SalesGraphModule { }
