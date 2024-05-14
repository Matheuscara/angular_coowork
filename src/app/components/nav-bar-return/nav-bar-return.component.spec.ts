import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarReturnComponent } from './nav-bar-return.component';
import { Router } from '@angular/router';

describe('NavBarReturnComponent', () => {
  let component: NavBarReturnComponent;
  let fixture: ComponentFixture<NavBarReturnComponent>;
  let router: Router;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarReturnComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NavBarReturnComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('returnHome should be call router to home', () => {
    spyOn(router, 'navigate');

    component.returnHome();

    expect(router.navigate).toHaveBeenCalled();
  })
});
