import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { User } from './../../shared/types'
import { Observable, of } from 'rxjs'
import { UserService } from './user.service'
import { catchError } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class UserDetailResolver implements Resolve<User> {

    constructor(
        private userService: UserService,
        private router: Router,
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.userService.getUser(+route.paramMap.get('id'))
            .pipe(
                catchError((err: HttpErrorResponse) => {
                    if (err.status === 404) {
                        this.router.navigate(['404']);
                    }
                    return of(null);
                })
            );
    }
}

// '+' in front of route is needed to cast string to int