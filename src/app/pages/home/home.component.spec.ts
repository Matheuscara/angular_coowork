import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component'; // Adjust the path as necessary
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let userService: UserService;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});