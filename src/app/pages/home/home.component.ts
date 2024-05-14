import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { UserStore } from '../../signals/user/user.state';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { StatusBarComponent } from '../../components/status-bar/status-bar.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CooworkStore } from '../../signals/coowork/coowork.state';
import { Router } from '@angular/router';
import { Coowork } from '../../models/coowork';

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
export class HomeComponent implements OnInit {
  readonly storeUser = inject(UserStore);
  readonly storeCoowork = inject(CooworkStore);

  form: FormGroup = new FormGroup({});
  test = true;
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
    return this.storeCoowork.getAllCategories().map((categorie) => {
      return {
        categorie: categorie.categorie,
        icon: '../../../assets/icons/' + categorie.icon,
      };
    });
  }

  getCategorieByCoowork(id: number, cooworks: Coowork[]): string {
    const coowork = cooworks.find(coowork => id === coowork.id);
    
    if (!coowork) return "";
    
    const categories = [];
    
    if (coowork.coffe) categories.push('Coffee');
    if (coowork.meetingRoom) categories.push('Meeting Room');
    if (coowork.safeBox) categories.push('Safe Box');

    return categories.length > 0 ? categories.join(' • ') : "";
  }

  getDayPrices(cooworkId: number, cooworks: Coowork[]): string {
    const coowork = cooworks.find(coowork => cooworkId === coowork.id);
    
    if (!coowork) return "";

    const doubleDayList = coowork.dayPrices.map(price => price.toString() + '.00');

    return "R$" + doubleDayList.join(' / R$');
  }

  redirectDeatils(id: number) {
    this.router.navigate([`/home/details/${id}`]);
  }
  
  ngOnInit(): void {
    this.storeUser.getUser();
    this.storeCoowork.getAll().subscribe();
  }

  logout(): void {
    this.storeUser.logout();
    location.reload();
  }
}
