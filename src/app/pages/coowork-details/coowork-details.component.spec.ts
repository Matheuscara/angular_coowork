import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CooworkDetailsComponent } from './coowork-details.component';
import { CooworkService } from '../../services/coowork.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getByIdCooworkMock } from '../../utils/mocks/cooworks/cooworks.examples';
import { of } from 'rxjs';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { NavBarReturnComponent } from '../../components/nav-bar-return/nav-bar-return.component';
import { StatusBarComponent } from '../../components/status-bar/status-bar.component';

describe('CooworkDetailsComponent', () => {
  let component: CooworkDetailsComponent;
  let cooworkService: CooworkService;
  let router: Router;
  let activatedRouteMock: Partial<ActivatedRoute>;
  let fixture: ComponentFixture<CooworkDetailsComponent>;

  activatedRouteMock = {
    params: of({ id: '1' }), // Simulando parâmetros da URL
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavBarReturnComponent,
        SkeletonModule,
        CommonModule,
        GoogleMapsModule,
        StatusBarComponent,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        {
          provide: CooworkService,
          useValue: {
            getById: () => of(getByIdCooworkMock),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CooworkDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    cooworkService = TestBed.inject(CooworkService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
