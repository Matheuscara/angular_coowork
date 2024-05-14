import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CooworkService } from './coowork.service';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { getAllCooworksMock, getByIdCooworkMock } from '../utils/mocks/cooworks/cooworks.examples';

describe('CooworkService', () => {
  let service: CooworkService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [CooworkService,{
        provide: HttpClientModule,
        useValue: {
            cooworkUrl: environment.apiUrl + '/v1/coowork',
        }
      }]
    });
    service = TestBed.inject(CooworkService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getAll should return allCooworks', () => {
    service.getAll().subscribe(cooworks => {
        expect(cooworks).toEqual(getAllCooworksMock);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/v1/coowork`);
    expect(req.request.method).toBe('GET');

    req.flush(getAllCooworksMock);
  })

  it('getById should return a coowork', () => {
    service.getById(1).subscribe(coowork => {
        expect(coowork).toEqual(getByIdCooworkMock);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/v1/coowork/1`);
    expect(req.request.method).toBe('GET');

    req.flush(getByIdCooworkMock);
  })

});