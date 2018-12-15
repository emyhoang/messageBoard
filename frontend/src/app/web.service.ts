import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';



@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: Http) { }
  getMessages() {
    return this.http.get('http://localhost:8000/messages').toPromise();
  }
}




