import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/types';

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
    private httpClient: HttpClient,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .subscribe(user => this.user = user)
      }
    })
  }

  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }

}