import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  validate(token: string | null) {
    const data = {
      token: token
    }
    return this.http.post("http://localhost:4000/auth/validate", data);
  }

  logout() {
    const data = {
      token: this.getToken()
    }

    this.destroyToken();

    return this.http.post("http://localhost:4000/auth/logout", data);
  }

  getToken() : string | null {
    return localStorage.getItem("token");
  }

  createToken(token: string) {
    localStorage.setItem("token", token);
  }

  destroyToken() {
    localStorage.removeItem("token");
  }

}
