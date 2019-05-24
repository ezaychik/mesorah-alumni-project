import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { AlumnaService } from 'src/app/services/alumna.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, public alumnaService: AlumnaService) { }

  ngOnInit() {
  }
  onLogout() {
    this.authService.logout();
  }

}
