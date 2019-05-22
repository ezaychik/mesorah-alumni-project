import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { ModalService } from './modal.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private modalService: ModalService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this.modalService.openModal('You must be logged in to view this page!');
      return false;
    }

  }
}
