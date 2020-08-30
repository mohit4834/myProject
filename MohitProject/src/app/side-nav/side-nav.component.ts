import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() container;
  salesGraph = '/sales-graph';
  salesList = '/sales-list';
  home = '/login';

  constructor() { }

  ngOnInit(): void {
  }

}
