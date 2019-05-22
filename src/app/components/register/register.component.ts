import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  alreadyRegisteredMessage = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['home']);
    }
  }
  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.alreadyRegisteredMessage = this.authService.register(email, password);
  }
}
