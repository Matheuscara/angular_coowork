import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { UserStore } from '../../signals/user/user.state';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly store = inject(UserStore);

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.store.getUser();
  }

  logout() {
    this.userService.postLogout().subscribe();
    location.reload();
  }
}
