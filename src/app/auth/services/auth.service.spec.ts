import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

describe('AuthService', () => {
   let service: AuthService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(AuthService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });

   describe('isAuthenticated method', () => {
      it('should return false by default', () => {
         expect(service.isAuthenticated()).toBe(false);
      });
   });

   describe('login method', () => {
      let params: { username: string; password: string };
      let loginRes$: Observable<boolean>;
      describe('with correct credentials', () => {
         beforeEach(() => {
            params = { username: 'admin', password: 'admin@123' };
            loginRes$ = service.login(params);
         });
         it('should return true', done => {
            loginRes$.subscribe(data => {
               expect(data).toBe(true);
               done();
            });
         });
      });
      describe('with incorrect credentials', () => {
         beforeEach(() => {
            params = { username: 'qw@qwerty', password: 'qwerty' };
            loginRes$ = service.login(params);
         });
         it('should return false', done => {
            loginRes$.subscribe(
               () => {},
               err => {
                  expect(err).toContain('username or password is invalid');
                  done();
               }
            );
         });
      });
   });
});
