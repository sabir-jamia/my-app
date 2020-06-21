import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup;

   constructor(
      private formBuilder: FormBuilder,
      public authService: AuthService,
      public router: Router
   ) {}

   ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
         username: ['', Validators.required],
         password: ['', Validators.required],
      });
   }

   onSubmit($event = null) {
      if ($event) {
         $event.preventDefault();
      }
      this.authService.login(this.loginForm.value).subscribe(
         data => this.onLoginSuccess(data),
         err => this.onLoginFailure(err)
      );
   }

   onLoginSuccess(data) {
      this.router.navigate(['/dashboard']);
   }

   onLoginFailure(err) {
      window.alert('something bad happened' + err);
   }
}
