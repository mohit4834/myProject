import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.scss']
})
export class SalesGraphComponent implements OnInit {

  data: any;

    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            datasets: [
                {
                    label: 'Sale Of Item 1',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40, 70]
                },
                {
                    label: 'Sale Of Item 2',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90, 35]
                }
            ]
        }
    }

  ngOnInit(): void {
  }

}
