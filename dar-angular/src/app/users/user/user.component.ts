import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/types';
import { UserService } from '../services/user.service';
import { mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.route.params // Source 1
      .pipe(
        mergeMap(param => this.userService.getUser(param.id)), // Source 2
        catchError(e => of(null))
      )
      .subscribe(user => {
        this.user = user
      });
  }

  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }

}