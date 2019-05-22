import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isAuthenticated = true;
  constructor(private router: Router) { }

  register(email: string, password: string) {
    // call some API to register
    const alreadyRegistered = true;
    if (alreadyRegistered) {
      // this.router.navigate(['login']);
      return 'User with that email alraedy exists.';
    } else {
      this.router.navigate(['home']);
      this.isAuthenticated = true;
    }

  }
  login(email: string, password: string) {
    // call some API to log in
    const isValidUser = true;
    if (isValidUser) {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
    } else {
      this.isAuthenticated = false;
    }
  }
  logout() {
    // clear local storage
    this.isAuthenticated = false;
    this.router.navigate(['login']);
  }

}
