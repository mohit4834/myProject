import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    // this.event.emit('toggleSideNav');
  }

  openUserProfileDialog(): void {
    // const dialogRef = this.dialog.open(AdminUserProfileDialogComponent, {
    //   width: '450px',
    //   height: '620px',
    //   data: { name: this.name, animal: this.animal }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

}
