import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string, elevated: boolean = false) {
    const data = {
      username: username,
      password: password,
      elevated: elevated 
    }

    return this.http.post("http://localhost:4000/authenticate", data);
  }

  validate(token: string | null) {
    const data = {
      token: token
    }
    return this.http.post("http://localhost:4000/authenticate/validate", data);
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
