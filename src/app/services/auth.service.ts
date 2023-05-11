import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // set to false to restore auth guard
  isLoggedIn: boolean = false;

  login(username:string, password:string) {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
