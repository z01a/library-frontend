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

  modify(username: string, firstname: string, lastname: string, email: string, address: string, phone: string, moderator: boolean, active: boolean) {
    const body = {
      username: username,
      firstname: firstname,
      lastname: lastname,
      address: address,
      email: email,
      phone: phone,
      moderator: moderator,
      active: active
    }
    
    return this.http.post("http://localhost:4000/users/modify", body);
  }

  changePassword(new_password: string, old_password: string, old_repeated: string) {
    const body = {
      new_password: new_password,
      old_password: old_password,
      old_repeated: old_repeated,
    }
    
    return this.http.post("http://localhost:4000/users/change/password", body);
  }

  fetch(requests: boolean = false) {
    if(requests) {
      return this.http.get("http://localhost:4000/users/requests");
    } else {
      return this.http.get("http://localhost:4000/users");
    }
  }

  fetchCurrentUser() {
    return this.http.get("http://localhost:4000/users/me");
  }

  fetchUser(username: string) {
    // const body = {
    //   username: username
    // }

    return this.http.get("http://localhost:4000/users/" + username);
  }

  approve(username: string) {
    const body = {
      username: username
    }
    return this.http.post("http://localhost:4000/users/requests/approve", body);
  }

  delete(username: string) {
    const body = {
      username: username
    }
    return this.http.post("http://localhost:4000/users/requests/delete", body);
  }
}
