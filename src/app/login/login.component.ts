import { LoginService } from './../core/login.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private loginService: LoginService, private snackBar: MatSnackBar, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    LoginService.login(this.userName, this.password).subscribe(res => {
      if (res) {
        console.log('Login Succeeded');
        const visitor = this.loginService.getCounter();
        console.log('File fetched is : ', visitor);
        let obj;
        if (!visitor || !visitor.count) {
          obj = {
            count: 1,
            lastVisitorID: this.userName
          };
        } else {
          obj = {
            count: visitor.count + 1,
            lastVisitorID: this.userName
          };
        }
        console.log('Object to set is : ', obj);
        this.loginService.setCouter(obj);
        this.route.navigate(['/sales-list']);

      } else {
        console.log('Please enter valid credentials');
        this.snackBar.open('Please enter valid credentials', 'Ok', {
          duration: 5000
        });
      }
    });

  }

  reset() {
    this.userName = '';
    this.password = '';
    console.log('Reset the value of the userName & Password');
  }

}
