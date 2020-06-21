import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthServiceMock } from '../../../tests/mocks/services/auth-service.mock';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
   let component: LoginComponent;
   let fixture: ComponentFixture<LoginComponent>;

   beforeEach(async(() => {
      const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
      TestBed.configureTestingModule({
         declarations: [LoginComponent],
         imports: [ReactiveFormsModule, RouterTestingModule],
         providers: [
            { provide: AuthService, useClass: AuthServiceMock },
            { provide: Router, useValue: routerSpy },
         ],
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create the components', () => {
      expect(component).toBeTruthy();
   });
   it('should initilizes the form with default value', () => {
      expect(component.loginForm.value).toEqual({ username: '', password: '' });
   });

   describe('onSubmit', () => {
      describe('with correct credentials', () => {
         beforeEach(() => {
            component.loginForm.setValue({
               username: 'admin',
               password: 'admin@123',
            });
         });
         it('should call the onLoginSuccess method', () => {
            spyOn(component, 'onLoginSuccess');
            component.onSubmit();
            expect(component.onLoginSuccess).toHaveBeenCalled();
         });
         it('should navigate the user to the dashboad', () => {
            component.onSubmit();
            expect(component.router.navigate).toHaveBeenCalledWith([
               '/dashboard',
            ]);
         });
      });
      describe('with incorrect credentials', () => {
         beforeEach(() => {
            component.loginForm.setValue({
               username: 'qw@qwerty',
               password: 'qwerty',
            });
         });
         it('should call the onLoginFailure method', () => {
            spyOn(component, 'onLoginFailure');
            component.onSubmit();
            expect(component.onLoginFailure).toHaveBeenCalled();
         });
         it('should call the alert method', () => {
            spyOn(window, 'alert');
            component.onSubmit();
            expect(window.alert).toHaveBeenCalled();
         });
      });
   });
});
