import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  template: `
        <mat-card>
            <mat-form-field style="width: 50%;">
                <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
            </mat-form-field>
            <br/>
            <mat-form-field style="width: 50%;">
                <input matInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
            </mat-form-field>
            <br/>
            <button style="width: 20%;" mat-raised-button color="primary" (click)="login()">Login</button>
        </mat-card>
    `
})
export class LoginComponent {
  constructor(private auth: AuthService) { }

  loginData = {
    email: '',
    password: ''
  }

  login() {
    // console.log(this.loginData);
    this.auth.login(this.loginData);
  }
}