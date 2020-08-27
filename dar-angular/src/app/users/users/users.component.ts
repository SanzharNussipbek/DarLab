import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/types';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  searchInput = '';

  constructor(
    private userService: UserService,
    private router: Router,  
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.users$ = this.userService.getUsers()
      .pipe(
        map(users => this.searchInput ? users.filter(user => user.name.includes(this.searchInput) || user.username.includes(this.searchInput)) : users)
      );
  }

  navigateToUser(id: number) {
    this.router.navigate(['/users', id]);
  }

  search() {
    console.log(this.searchInput);
    if (this.searchInput)
      this.getData()
  }

  clearSearch() {
    this.searchInput = '';
    this.getData();
  }
}
/*
 * Angular cannot speak with services directly
 * Need to create a private client
 * Dependency injection (DI)
 * Then you can make requests
 * Returns observable
 */
