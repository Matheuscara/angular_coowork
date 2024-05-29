import { Component, OnInit, inject, input, signal } from '@angular/core';
import { NavBarReturnComponent } from '../../components/nav-bar-return/nav-bar-return.component';
import { CalendarModule, Month } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, ViewportScroller } from '@angular/common';
import { cooworkDetails } from '../../models/coowork-details';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Place } from '../../models/place';
import { StatusBarComponent } from '../../components/status-bar/status-bar.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
  imports: [
    NavBarReturnComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StatusBarComponent,
  ],
})
export class ScheduleComponent implements OnInit {
  // address = this.storeCoowork.cooworkDetailsLocation();
  // cooworkDetails = this.storeCoowork.cooworkDetails();
  place!: Place;
  share = false;

  coowork = input.required<cooworkDetails>();
  date: Date = new Date();
  calendaryMonthInitial: Month = {
    month: this.date.getMonth(),
    year: this.date.getFullYear(),
  };
  monthSignal = signal<Month>(this.calendaryMonthInitial);

  constructor(
    private url: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    // console.log(this.storeCoowork.cooworkList())
    this.url.params.subscribe((params) => {
      this.setPlace(params['squeduleId']);
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  setPlace(id: string) {
    // const place = this.storeCoowork
    //   .cooworkDetails()
    //   .places.find((place) => place.id === Number(id));

    // if (place) {
    //   this.place = place;
    // }
  }
}
