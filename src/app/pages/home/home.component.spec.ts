import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component'; // Adjust the path as necessary
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { CooworkService } from '../../services/coowork.service';
import { getAllCooworksMock } from '../../utils/mocks/cooworks/cooworks.examples';
import { finalize, of } from 'rxjs';
import { getUserMock } from '../../utils/mocks/user/user.examples';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let userService: UserService;
  let cooworkService: CooworkService;
  let router: Router;

  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientModule],
      providers: [
        {
          provide: CooworkService,
          useValue: {
            getAll: () => of(getAllCooworksMock),
          },
        },
        {
          provide: UserService,
          useValue: {
            getUser: () => of(getUserMock),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
    cooworkService = TestBed.inject(CooworkService);
  });

  it('create a component', () => {
    expect(component).toBeTruthy();
  });

  it('getAllCategories should return an array of categories with icon src', () => {
    spyOn(component.storeCoowork, 'getAllCategories').and.returnValue(
      [
        { categorie: 'coffee', icon: 'coffee.svg' },
        { categorie: 'Meeting Room', icon: 'meeting-room.svg' },
        { categorie: 'Safe Box', icon: 'safe-box.svg' },
      ],
    );

    const result = component.getAllCategories();

    expect(result).toEqual([
      {
        categorie: 'coffee',
        icon: '../../../assets/icons/coffee.svg',
      },
      {
        categorie: 'Meeting Room',
        icon: '../../../assets/icons/meeting-room.svg',
      },
      {
        categorie: 'Safe Box',
        icon: '../../../assets/icons/safe-box.svg',
      },
    ]);
  });

  it('getCategorieByCoowork should return empty with categories ever null', () => {
    const testMock = getAllCooworksMock;
    testMock[0].coffee = false;
    testMock[0].meetingRoom = false;
    testMock[0].safeBox = false;

    const result = component.getCategorieByCoowork(1, testMock);
    
    expect(result).toEqual('');
  });


  it('getCategorieByCoowork should return a category by coowork id', () => {
    const test = getAllCooworksMock
    getAllCooworksMock[0].coffee = true;
    getAllCooworksMock[0].meetingRoom = true;
    getAllCooworksMock[0].safeBox = true;

    const resultBy = component.getCategorieByCoowork(1, test);

    expect(resultBy).toEqual('coffee • Meeting Room • Safe Box');
  });

  it('getCategorieByCoowork should return empty', () => {
    const testMock = getAllCooworksMock;
    testMock[0].coffee = false;
    testMock[0].meetingRoom = false;
    testMock[0].safeBox = false;

    const result = component.getCategorieByCoowork(1, testMock);

    expect(result).toEqual('');
  });

  it('getCategorieByCoowork should return empty because not found coowork', () => {
    const result = component.getCategorieByCoowork(3, getAllCooworksMock);

    expect(result).toEqual('');
  });

  it('redirectDeatils should redirect to home/details/id', () => {
    spyOn(router, 'navigate');

    component.redirectDeatils(2);

    expect(router.navigate).toHaveBeenCalledWith(['/home/details/2']);
  });
});
