import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDtoRequest } from './user/dtos/login.dto.request';
import { LoginDtoResponse } from './user/dtos/login.dto.response';
import { CreateUserDtoRequest } from './user/dtos/createUser.dto.request';
import { getAccessToken } from '../utils/utils';
import { UserDtoRepsonse } from './user/dtos/getUser.dto.response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authUrl: string;
  private userUrl: string;

  accessToken = '';

  constructor(private http: HttpClient) {
    this.authUrl = environment.apiUrl + '/v1/auth';
    this.userUrl = environment.apiUrl + '/v1/user';
  }

  postLogin(body: LoginDtoRequest): Observable<LoginDtoResponse> {
    return this.http.post<LoginDtoResponse>(this.authUrl, body);
  }

  postCreateUser(body: CreateUserDtoRequest): Observable<String> {
    return this.http.post<any>(this.authUrl + '/save', body);
  }

  getUser(): Observable<UserDtoRepsonse> {
    const headers = {
      Authorization: "Bearer " + getAccessToken(),
    };

    return this.http.get<UserDtoRepsonse>(this.userUrl, {
      headers: headers,
    });
  }

  postRefresh() {
    const headers = {
      Authorization: getAccessToken(),
    };

    return this.http.post(
      this.authUrl + '/refresh',
      {},
      { headers:headers }
    );
  }

  getTokenVerify(): any {
    const headers = {
      Authorization: getAccessToken(),
    };

    return this.http.get(this.authUrl + '/validate', {
        headers: headers,
      });
  }
}
