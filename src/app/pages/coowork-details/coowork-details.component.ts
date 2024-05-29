import { Component, effect, inject } from '@angular/core';
import { NavBarReturnComponent } from '../../components/nav-bar-return/nav-bar-return.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { cooworkDetails } from '../../models/coowork-details';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from '../../components/status-bar/status-bar.component';
import { CooworkDetailsSubjectService } from '../../signalsSubject/cooworkDetails/coowork-signals-service';

@Component({
  selector: 'app-coowork-details',
  standalone: true,
  templateUrl: './coowork-details.component.html',
  styleUrl: './coowork-details.component.scss',
  imports: [
    NavBarReturnComponent,
    SkeletonModule,
    CommonModule,
    GoogleMapsModule,
    StatusBarComponent,
  ],
})
export class CooworkDetailsComponent {
  readonly coworkDetailsSubjectService = inject(CooworkDetailsSubjectService);

  address = () => this.coworkDetailsSubjectService.cooworkDetail().address;
  cooworkDetails = () => this.coworkDetailsSubjectService.cooworkDetail();

  share = true;

  optionsMap: google.maps.MapOptions = {
    disableDefaultUI: true,
  };

  markerPositions: google.maps.LatLngLiteral = { lat: 0, lng: 0 };

  constructor(private url: ActivatedRoute, private router: Router) {
    this.url.params.subscribe((params) => {
      const id = Number(params['id']);
      this.coworkDetailsSubjectService.loadInitCooworkDetails(id);
    });

    effect(() => {
      if (this.coworkDetailsSubjectService.load()) {
        this.optionsMap.center = {
          lat: this.cooworkDetails().address.lat,
          lng: this.cooworkDetails().address.lon,
        };
        this.optionsMap.zoom = 20;
        this.markerPositions = this.optionsMap.center;
      }
    });
  }

  getCategorieByCoowork(coowork: cooworkDetails): string {
    if (!coowork) return '';

    const categories = [];

    if (coowork.coffee) categories.push('coffee');
    if (coowork.meetingRoom) categories.push('Meeting Room');
    if (coowork.safeBox) categories.push('Safe Box');

    return categories.length > 0 ? categories.join(' • ') : '';
  }

  redirectToSchedule(placeId: number) {
    this.router.navigateByUrl(
      'home/details/' + this.cooworkDetails().id + '/squedule/' + placeId,
      {
        state: { coowork: this.cooworkDetails() },
      }
    );
  }
}
