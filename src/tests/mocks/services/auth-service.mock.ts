import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';

export class AuthServiceMock {
   login({ username, password }): Observable<boolean> {
      if (username == 'qw@qwerty') {
         return throwError('User not found');
      }
      return of(true);
   }
}
