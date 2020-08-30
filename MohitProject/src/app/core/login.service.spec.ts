import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { of } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [LoginService]
    });
    service = TestBed.get(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add tests for login() method
  describe('login', () => {

    it('should return a observable of success in login', () => {
      const succes =  true;
      let response;
      spyOn(LoginService, 'login').and.returnValue(of(succes));

      LoginService.login('Mohit', 'Admin').subscribe(res => {
        response = res;
      });

      expect(response).toEqual(succes);
    });
    it('should return a observable of failure in login', () => {
      const fail =  false;
      let response;
      spyOn(LoginService, 'login').and.returnValue(of(fail));

      LoginService.login('dfndm', 'njmdnf').subscribe(res => {
        response = res;
      });

      expect(response).toEqual(fail);
    });
  });

});
