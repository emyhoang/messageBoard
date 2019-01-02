import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'user',
  template: `
        <mat-card class="card">
            <mat-form-field>
                <input matInput [(ngModel)]="model.firstName" placeholder="First Name">
            </mat-form-field>
            <br/>
            <mat-form-field>
                <input matInput [(ngModel)]="model.lastName" placeholder="Last Name">
            </mat-form-field>
            <br/>
            <button mat-raised-button color="primary" (click)="saveUser(model)">Save Changes</button>
        </mat-card>
    `
})
export class UserComponent {

  model = {
    firstName: '',
    lastName: ''
  }

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getUser().subscribe(res => {
      this.model.firstName = res.firstName;
      this.model.lastName = res.lastName;
    })
  }
  saveUser(userData) {
    this.webService.saveUser(userData).subscribe();
  }
}