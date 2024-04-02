import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginDtoRequest } from './dtos/login.dto.request';
import { LoginDtoResponse } from './dtos/login.dto.response';
import { CreateUserDtoRequest } from './dtos/createUser.dto.request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl: string;
  accessToken = '';

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:3000/api/user';
  }

  postLogin(body: LoginDtoRequest): Observable<LoginDtoResponse> {
    return this.http.post<LoginDtoResponse>(this.userUrl + '/login', body, {
      withCredentials: true,
    });
  }

  postCreateUser(body: CreateUserDtoRequest): Observable<any> {
    return this.http.post<any>(this.userUrl, body);
  }

  postGetUser(metodo: string): Observable<any> {
    return this.http.get<any>(this.userUrl, {
      headers: { Authorization: 'Bearer ' + this.accessToken },
    });
  }

  postRefresh() {
    return this.http.post(
      this.userUrl + '/refresh',
      {},
      { withCredentials: true }
    );
  }

  getTokenVerify(): Observable<any> {
    return this.http.get(this.userUrl + '/token');
  }

  postLogout(): Observable<any> {
    return this.http.post(this.userUrl + '/logout', {}, { withCredentials: true });
  }
}
