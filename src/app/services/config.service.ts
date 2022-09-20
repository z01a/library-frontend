import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get("http://localhost:4000/config");
  }

  setLoan(loan: number) {
    return this.http.put("http://localhost:4000/config/loan/" + loan, undefined);
  }

  getLoan() {
    return this.http.get("http://localhost:4000/config/loan");
  }
}
