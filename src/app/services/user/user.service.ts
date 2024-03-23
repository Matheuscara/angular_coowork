import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDtoRequest } from './dtos/login.dto.request';
import { LoginDtoResponse } from './dtos/login.dto.response';
import { CreateUserDtoRequest } from './dtos/createUser.dto.request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:3000/api/user';
  }

  postLogin(body: LoginDtoRequest): Observable<LoginDtoResponse> {
    return this.http.post<LoginDtoResponse>(this.userUrl + '/login', body);
  }

  postCreateUser(body: CreateUserDtoRequest): Observable<any> {
    return this.http.post<any>(this.userUrl, {
      ...body,
      endereco: {
        rua: 'testes',
        bairro: 'testes',
        cep: 'testes',
        cidade: 'testes',
        pais: 'testes',
        numero: '2',
        complemento: 'testes',
      },
    });
  }
}
