import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage = '';

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.errorMessage = '';

    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.get('username').value, this.form.value['password'])
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error ? err.error.message : err.message;
          this.form.reset();
          return EMPTY;
        })
      )
      .subscribe(res => {
        this.authService.setLoggedIn(res);
        this.router.navigate(['/']);
      });
  }
}
