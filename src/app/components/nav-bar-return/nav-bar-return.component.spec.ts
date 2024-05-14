import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarReturnComponent } from './nav-bar-return.component';

describe('NavBarReturnComponent', () => {
  let component: NavBarReturnComponent;
  let fixture: ComponentFixture<NavBarReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
