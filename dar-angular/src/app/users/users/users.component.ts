import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/types';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router,  
  ) { }

  ngOnInit(): void {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users') // is Observable
      .pipe(
        catchError((err) => {
          console.log('Error trying to get Users', err)
          return of([]);
        })
      )
      .subscribe(data => {
        this.users = data;
      })
  }

  navigateToUser(id: number) {
    this.router.navigate(['/users', id]);
  }
}
/*
 * Angular cannot speak with services directly
 * Need to create a private client
 * Dependency injection (DI)
 * Then you can make requests
 * Returns observable
 */
