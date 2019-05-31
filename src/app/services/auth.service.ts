import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnaService } from './alumna.service';
import { NewUser } from '../models/new-user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthService {
  isAuthenticated = true;
  constructor(private router: Router, private httpClient: HttpClient, private alumnaService: AlumnaService) { }

  register(newUser: NewUser) {
    // call some API to register and return new id
    return this.httpClient.post('https://mesorah-alumni-network.firebaseio.com/users.json', newUser).subscribe(
      (response) => {
        console.log(response);
        const alreadyRegistered = false;
        if (alreadyRegistered) {
          return 'User with that email alraedy exists.';
        } else {
          this.alumnaService.setIdOfActiveAlumna(5);
          this.router.navigate(['home']);
          this.isAuthenticated = true;
        }
      }
    );


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
