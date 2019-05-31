import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/models/new-user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  alreadyRegisteredMessage;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['home']);
    }
  }
  onSignup(form: NgForm) {
    const newUser: NewUser = new NewUser(form.value.firstName, form.value.lastName, form.value.email, form.value.password);
    this.alreadyRegisteredMessage = this.authService.register(newUser);
    console.log(this.alreadyRegisteredMessage);
  }
}
