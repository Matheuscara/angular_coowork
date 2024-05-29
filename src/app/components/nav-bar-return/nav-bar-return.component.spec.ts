import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { NavBarReturnComponent } from './nav-bar-return.component';
import { Router } from '@angular/router';

describe('NavBarReturnComponent', () => {
  let component: NavBarReturnComponent;
  let fixture: ComponentFixture<NavBarReturnComponent>;
  let location: Location;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarReturnComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NavBarReturnComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('returnHome should be call router to home', () => {
    spyOn(location, 'back');

    component.returnHome();

    expect(location.back).toHaveBeenCalled();
  })
});
