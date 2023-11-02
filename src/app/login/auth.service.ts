import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, catchError, tap } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  user: { email: string };
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signUp(name: string, email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://user-auth-server.onrender.com/api/v1/user/signup',
        {
          name,
          email,
          password,
        }
      )
      .pipe(
        tap((resData) => {
          this.handleAuthentication(resData.user.email, resData.token);
        }),
        catchError((error) => {
          console.error('Error in signUp:', error);
          throw error;
        })
      );
  }
  logIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://user-auth-server.onrender.com/api/v1/user/login',
        {
          email,
          password,
        }
      )
      .pipe(
        tap((resData) => {
          this.handleAuthentication(resData.user.email, resData.token);
        }),
        catchError((error) => {
          console.error('Error in login:', error);
          throw error;
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      token: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.email, userData.token);
    if (loadedUser.tokens) {
      this.user.next(loadedUser);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

  private handleAuthentication(email: string, token: string) {
    const user = new User(email, token);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
