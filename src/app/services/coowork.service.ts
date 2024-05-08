import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { getAllDtoResponse } from './cooworks/dtos/getAll.dto.request';
import { getAccessToken } from '../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class CooworkService {
  private cooworkUrl: string;

  constructor(private http: HttpClient) {
    this.cooworkUrl = environment.apiUrl + '/v1/coowork';
  }

  getAll(): Observable<getAllDtoResponse[]> {
    const headers = {
      Authorization: "Bearer " + getAccessToken(),
    };

    return this.http.get<getAllDtoResponse[]>(this.cooworkUrl, {headers});
  }
}
