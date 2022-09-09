import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  register(firstname: string, lastname: string, username: string, password: string, email: string, address: string, phone: string, picture: string) {
    const body = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      address: address,
      email: email,
      phone: phone,
      picture: picture
    }
    
    return this.http.post("http://localhost:4000/users/register", body);
  }
}