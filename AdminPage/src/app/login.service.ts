import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Admin } from './admin';
// import { Admin } from './admin.model';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  sendCredential(username: 'String', password: 'String') {

      Admin.emailid = username;
      Admin.password = password;
      return this.http.post('http://localhost:8090/admin', Admin);
  }

  logout() {
     const url = 'http://localhost:8080/logout';
     return this.http.get(url, { withCredentials: true });
   }

}
