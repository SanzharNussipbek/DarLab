import { Injectable } from '@angular/core'
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router'

import { AuthService } from './auth.service'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate{

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.isLoggedIn$
            .pipe(
                tap(isLoggedIn => {
                    if (!isLoggedIn) {
                        this.router.navigate(['auth/login'])
                    }
                })
            );
    }
}