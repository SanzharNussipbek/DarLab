import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMessage = ''

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
    if (this.form.invalid) {
      return;
    }

    this.errorMessage='';

    this.authService.register(this.form.get('username').value, this.form.value['password'])
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error ? err.error.message : err.message;
          this.form.reset();
          return EMPTY;
        })
      )
      .subscribe(res=>{
        alert("Registered successfully!");
        this.router.navigate(['/auth/login']);
      });
  }
}
