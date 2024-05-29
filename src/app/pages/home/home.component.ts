import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { StatusBarComponent } from '../../components/status-bar/status-bar.component';
import { SkeletonModule } from 'primeng/skeleton';
import { Router } from '@angular/router';
import { Coowork } from '../../models/coowork';
import { CooworkSubjectService } from '../../signalsSubject/cooworks/coowork-signals-service';
import { UserSubjectService } from '../../signalsSubject/user/user-signals-service';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    JsonPipe,
    InputComponent,
    CommonModule,
    FormsModule,
    StatusBarComponent,
    SkeletonModule,
  ],
})
export class HomeComponent {
  readonly cooworkSubjectService = inject(CooworkSubjectService);
  readonly userSubjectService = inject(UserSubjectService);

  form: FormGroup = new FormGroup({});
  skeletonsArray = new Array(10);

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      searchCoowork: [
        '',
        {
          validators: [],
          updateOn: 'blur',
        },
      ],
    });
  }

  getAllCategories(): { categorie: string; icon: string }[] {
    let categories: { categorie: string; icon: string }[] = [];

    this.cooworkSubjectService.allcooworks().map((coowork) => {
      if (coowork.coffee)
        categories.push({ categorie: 'coffee', icon: 'coffee.svg' });
      if (coowork.meetingRoom)
        categories.push({
          categorie: 'Meeting Room',
          icon: 'meeting-room.svg',
        });
      if (coowork.safeBox)
        categories.push({ categorie: 'Safe Box', icon: 'safe-box.svg' });
    });
    categories = categories.filter(
      (v, i) => categories.findIndex((t) => t.categorie === v.categorie) === i
    );

    return categories.map((categorie) => {
      return {
        categorie: categorie.categorie,
        icon: '../../../assets/icons/' + categorie.icon,
      };
    });
  }

  getCategorieByCoowork(id: number, cooworks: Coowork[]): string {
    const coowork = cooworks.find((coowork) => id === coowork.id);

    if (!coowork) return '';

    const categories = [];

    if (coowork.coffee) categories.push('coffee');
    if (coowork.meetingRoom) categories.push('Meeting Room');
    if (coowork.safeBox) categories.push('Safe Box');

    return categories.length > 0 ? categories.join(' • ') : '';
  }

  getDayPrices(cooworkId: number, cooworks: Coowork[]): string {
    const coowork = cooworks.find((coowork) => cooworkId === coowork.id);

    if (!coowork) return '';

    const doubleDayList = coowork.dayPrices.map(
      (price) => price.toString() + '.00'
    );

    return 'R$' + doubleDayList.join(' / R$');
  }

  redirectDeatils(id: number) {
    this.router.navigate([`/home/details/${id}`]);
  }

  logout(): void {
    this.userSubjectService.logout();
    location.reload();
  }
}
