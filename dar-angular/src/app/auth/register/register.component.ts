import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = ''

  constructor(
    private authService: AuthService,
    private router: Router,  
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.username || !this.password){
      this.errorMessage = 'Fill all required fields!';
      return;
    }

    this.errorMessage='';

    this.authService.register(this.username, this.password)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          this.errorMessage = err.error ? err.error.message : err.message;
          this.password='';
          this.username='';
          return EMPTY;
        })
      )
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['auth/login']);
      });
  }
}
