import { LoginService } from './../core/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public visitorNumber: number;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    const obj = this.loginService.getCounter();
    if (obj && obj.count) {
      this.visitorNumber = this.loginService.getCounter().count;
    }
  }

  toggleSideNav() {
    // this.event.emit('toggleSideNav');
  }

}
