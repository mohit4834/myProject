import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  static login(userName, password): Observable<boolean> {

    if (userName === 'Mohit' && password === 'Admin') {
      return of(true);
    } else {
      return of(false);
    }

  }

  setCouter(config: any) {
    console.log(config);
    localStorage.setItem('visitorCounter', JSON.stringify(config));
    // return this.http.put('../../assets/visitor-counter.json', config);
  }

  getCounter() {
    const visitorString = localStorage.getItem('visitorCounter');
    if (visitorString && visitorString.length > 0) {
      return JSON.parse(visitorString);
    }
    // return this.http.get('../../assets/visitor-counter.json');
  }

}
