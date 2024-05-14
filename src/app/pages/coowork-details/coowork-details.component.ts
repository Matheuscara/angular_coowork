import { Component, inject } from '@angular/core';
import { NavBarReturnComponent } from '../../components/nav-bar-return/nav-bar-return.component';
import {
  CooworkStore,
  initialState,
} from '../../signals/coowork/coowork.state';
import { Coowork } from '../../models/coowork';
import { ActivatedRoute, Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { cooworkDetails } from '../../models/coowork-details';

@Component({
  selector: 'app-coowork-details',
  standalone: true,
  imports: [NavBarReturnComponent, SkeletonModule],
  templateUrl: './coowork-details.component.html',
  styleUrl: './coowork-details.component.scss',
})
export class CooworkDetailsComponent {
  cowork: Coowork = initialState.cooworkList.cooworks[0];

  readonly storeCoowork = inject(CooworkStore);

  constructor(private url: ActivatedRoute, private router: Router) {
    this.url.params.subscribe((params) => {
      const id = Number(params['id']);
      this.storeCoowork.getById(id);
    });
  }

  getCategorieByCoowork(coowork: cooworkDetails): string {
    if (!coowork) return '';

    const categories = [];

    if (coowork.coffe) categories.push('Coffee');
    if (coowork.meetingRoom) categories.push('Meeting Room');
    if (coowork.safeBox) categories.push('Safe Box');

    return categories.length > 0 ? categories.join(' • ') : '';
  }
}
