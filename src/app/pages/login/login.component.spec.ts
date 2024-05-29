import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { getUserMock } from '../../utils/mocks/user/user.examples';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let userService: UserService;
  let router: Router;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientModule],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUser: () => of(getUserMock),
            postLogin: () => of({}),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
  });

  it('create a component', () => {
    expect(component).toBeTruthy();
  });

  it('login should be call login', () => {
    spyOn(component.userService, 'postLogin').and.returnValue(of());

    component.login();

    expect(userService.postLogin).toHaveBeenCalled();
  });

  it('redirectRegisterAcount should be call router to register-account', () => {
    spyOn(router, 'navigate');

    component.redirectRegisterAcount();

    expect(router.navigate).toHaveBeenCalled();
  });
});
