import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnaService } from './alumna.service';

@Injectable()
export class AuthService {
  isAuthenticated = true;
  constructor(private router: Router, private alumnaService: AlumnaService) { }

  register(email: string, password: string) {
    // call some API to register and return new id
    const alreadyRegistered = true;
    if (alreadyRegistered) {
      return 'User with that email alraedy exists.';
    } else {
      this.alumnaService.setIdOfActiveAlumna(5);
      this.router.navigate(['home']);
      this.isAuthenticated = true;
    }

  }
  login(email: string, password: string) {
    // call some API to log in, and return id

    const isValidUser = true;
    if (isValidUser) {
      this.isAuthenticated = true;
      this.alumnaService.setIdOfActiveAlumna(5);
      this.router.navigate(['home']);
    } else {
      this.isAuthenticated = false;
      return 'You have entered the wrong user name/password.';

    }
  }
  logout() {
    // clear local storage
    this.isAuthenticated = false;
    this.router.navigate(['login']);
  }

}
