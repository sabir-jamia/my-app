import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { routes } from '../../app-routing.module';

describe('AuthGuard', () => {
   let guard: AuthGuard;

   beforeEach(() => {
      const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
      TestBed.configureTestingModule({
         imports: [RouterTestingModule.withRoutes(routes)],
         providers: [AuthService, { provide: Router, useValue: routerSpy }],
      });
      guard = TestBed.inject(AuthGuard);
   });

   it('should be created', () => {
      expect(guard).toBeTruthy();
   });

   describe('user is authenticated', () => {
      it('should return true', () => {
         spyOn(guard.authService, 'isAuthenticated').and.returnValue(true);
         expect(guard.canActivate()).toBe(true);
      });
   });

   describe('user is unauthenticated', () => {
      beforeEach(() => {
         spyOn(guard.authService, 'isAuthenticated').and.returnValue(false);
      });
      it('should redirect the user to "login"', () => {
         guard.canActivate();
         expect(guard.router.navigate).toHaveBeenCalledWith(['/login']);
      });
      it('should return false', () => {
         expect(guard.canActivate()).toBe(false);
      });
   });
});
