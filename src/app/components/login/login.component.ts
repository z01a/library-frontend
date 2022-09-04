import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    this.username = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  username : string;

  password : string;
  
}
