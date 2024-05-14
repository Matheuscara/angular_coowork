import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';
import { getUserMock, postCreateUserMock, postLoginMock } from '../utils/mocks/user/user.examples';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('postLogin - should make POST request to login', () => {

    service.postLogin({ email: '', password: '' }).subscribe(response => {
      expect(response).toEqual(postLoginMock);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/v1/auth`);
    expect(req.request.method).toBe('POST');
    req.flush(postLoginMock);
  });

  it('postCreateUser - should make POST request to create user', () => {

    service.postCreateUser(postCreateUserMock).subscribe(response => {
      expect(response).toEqual("OK");
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/v1/auth` + '/save');
    expect(req.request.method).toBe('POST');
    req.flush("OK");
  });

  it('getUser - should make GET request to get user', () => {
      service.getUser().subscribe(response => {
        expect(response).toEqual(getUserMock);
      });
  
      const req = httpMock.expectOne(`${environment.apiUrl}/v1/user`);
      expect(req.request.method).toBe('GET');
      req.flush(getUserMock);
  })

  it('postRefresh - should make POST request to refresh token', () => {
    service.postRefresh().subscribe(response => {
      expect(response).toEqual("OK");
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/v1/auth/refresh`);
    expect(req.request.method).toBe('POST');
    req.flush("OK");
  })

  it('getTokenVerify - should make GET request to verify token', () => {
    service.getTokenVerify().subscribe(response => {
      expect(response).toEqual("OK");
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/v1/auth/validate`);
    expect(req.request.method).toBe('GET');
    req.flush("OK");
  })

  // Add similar tests for other methods: postCreateUser, getUser, postRefresh, getTokenVerify
});
