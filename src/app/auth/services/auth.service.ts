import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   private authenticated = false;

   constructor() {}

   isAuthenticated() {
      return this.authenticated;
   }

   login({ username, password }): Observable<boolean> {
      if (username == 'admin' && password == 'admin@123') {
         this.authenticated = true;
         return of(true).pipe(delay(2000));
      } else {
         return throwError('username or password is invalid').pipe(delay(2000));
      }
   }
}
