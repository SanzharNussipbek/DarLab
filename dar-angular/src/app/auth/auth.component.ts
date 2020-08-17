import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  usernameInput = '';
  passwordInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.usernameInput);
    console.log(this.passwordInput);
  }
}
