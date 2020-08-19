import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInfo } from './types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  public isLoggedIn$ = this.isLoggedIn.asObservable();

  public authInfo: AuthInfo = null;

  constructor(private httpClient: HttpClient) {
    let authInfo = null;
    try {
      authInfo = localStorage.getItem('dar-lab-auth') ?
        JSON.parse(localStorage.getItem('dar-lab-auth')) : null;

    } catch (e) {

    }

    if (authInfo) {
      this.isLoggedIn.next(true);
      this.authInfo = authInfo;
    }
  }

  setLoggedIn(authInfo: AuthInfo) {
    localStorage.setItem('dar-lab-auth', JSON.stringify(authInfo));
    this.authInfo = authInfo;
    this.isLoggedIn.next(true);
  }

  setLoggedOut() {
    localStorage.removeItem('dar-lab-auth');
    localStorage.clear();
    this.authInfo = null;
    this.isLoggedIn.next(false);
  }


  login(username: string, password: string) {
    const data = {
      grant_type: 'password',
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      username,
      password,
    };
    return this.httpClient.post<AuthInfo>(`${environment.griffonApiUrl}/oauth/token`, data);
  }

  logout() {

  }

  register(username: string, password: string) {
    const data = {
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      username,
      password,
    };
    return this.httpClient.post<any>(`${environment.griffonApiUrl}/oauth/signup`, data);
  }
}
