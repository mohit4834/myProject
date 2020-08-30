import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  selectedItem: any;
  selectedStockItem: any;
  selected = 'Running';

  items = [
    {
      id: 1,
      name: 'Soap',
      status: 'Running'
    },
    {
      id: 2,
      name: 'Oil',
      status: 'Canceled'
    },
    {
      id: 3,
      name: 'Detergent',
      status: 'Completed'
    }
  ];

  stockItems = [
    {
      id: 11,
      name: 'Stock-Soap',
      status: 'Running',
      inStock: true
    },
    {
      id: 12,
      name: 'Stock-Oil',
      status: 'Canceled',
      inStock: false
    },
    {
      id: 13,
      name: 'Stock-Detergent',
      status: 'Completed',
      inStock: true
    }
  ];

  inStocks: boolean;

  constructor() {
    this.inStocks = true;
  }

  ngOnInit(): void {
  }

  setSelectedItem(item) {
    this.selectedItem = item;
  }

  setSelectedStockItem(stockItem) {
    this.selectedStockItem = stockItem;
  }

}
