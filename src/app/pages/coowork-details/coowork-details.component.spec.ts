import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooworkDetailsComponent } from './coowork-details.component';
import { CooworkService } from '../../services/coowork.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getAllCooworksMock, getByIdCooworkMock } from '../../utils/mocks/cooworks/cooworks.examples';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CooworkStore } from '../../signals/coowork/coowork.state';

describe('CooworkDetailsComponent', () => {
  let component: CooworkDetailsComponent;
  let cooworkService: CooworkService;
  let router: Router;
  let activatedRouteMock: Partial<ActivatedRoute>;
  let fixture: ComponentFixture<CooworkDetailsComponent>;

  activatedRouteMock = {
    params: of({ id: '1' }) // Simulando parâmetros da URL
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooworkDetailsComponent, HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        {
          provide: CooworkService,
          useValue: {
            getById: () => of(getByIdCooworkMock),
          },
        },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CooworkDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    cooworkService = TestBed.inject(CooworkService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should call CooworkStore.getById with correct id from ActivatedRoute', () => {
//     // Verificando se o método getById do CooworkStore é chamado com o id correto
//     expect(cooworkStoreSpy.getById).toHaveBeenCalledWith(1);
//   });
});
