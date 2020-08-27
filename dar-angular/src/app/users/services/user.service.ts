import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/types';
import { catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {

    }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users') // is Observable
                .pipe(
                    catchError((err) => {
                        console.log('Error trying to get Users', err)
                        return of([]);
                    })
                );
    }

    getUser(id: number): Observable<User> {
        return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
                .pipe(
                    catchError((err) => {
                        console.log('Error trying to get Users', err);
                        return throwError(err);
                    })
                );
    }
}