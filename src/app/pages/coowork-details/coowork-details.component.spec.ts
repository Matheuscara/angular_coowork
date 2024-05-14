import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooworkDetailsComponent } from './coowork-details.component';

describe('CooworkDetailsComponent', () => {
  let component: CooworkDetailsComponent;
  let fixture: ComponentFixture<CooworkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooworkDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CooworkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
