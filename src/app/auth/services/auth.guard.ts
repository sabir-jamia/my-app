import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
   providedIn: 'root',
})
export class AuthGuard implements CanActivate {
   constructor(public authService: AuthService, public router: Router) {}

   canActivate(): boolean {
      const authenticated = this.authService.isAuthenticated();
      if (authenticated) {
         return true;
      }

      this.router.navigate(['/login']);
      return false;
   }
}
