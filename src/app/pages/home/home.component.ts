import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { UserStore } from '../../signals/user/user.state';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { InputComponent } from "../../components/input/input.component";
import { StatusBarComponent } from '../../components/status-bar/status-bar.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CooworkStore } from '../../signals/coowork/coowork.state';

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
      SkeletonModule
    ]
})
export class HomeComponent implements OnInit {
  readonly storeUser = inject(UserStore);
  readonly storeCoowork = inject(CooworkStore);

  form: FormGroup = new FormGroup({});
  test = true;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
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

  ngOnInit(): void {
    this.storeUser.getUser();
    this.storeCoowork.getAll()
  }

  logout() {
    this.storeUser.logout();
    location.reload();
  }
}
