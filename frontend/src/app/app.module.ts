import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component'
import { NewMessageComponent } from './new-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';


import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatFormFieldModule,
} from '@angular/material';


var routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'messages/:name',
  component: MessagesComponent
},
{
  path: 'messages',
  component: MessagesComponent
},
{
  path: 'register',
  component: RegisterComponent
}];


@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent,
    NavComponent, HomeComponent, RegisterComponent
  ],
  imports: [
    HttpModule, BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatCardModule,
    MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)

  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
