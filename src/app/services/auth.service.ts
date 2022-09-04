import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  auth(username: string, password: string) {
    const data = {
      username: username,
      password: password
    }

    return this.http.post("http://localhost:4000/auth", data);
  }

}
