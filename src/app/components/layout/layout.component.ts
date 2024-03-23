import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserStore } from '../../signals/user/user.state';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  readonly store = inject(UserStore);

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToCreateAccount() {
    this.router.navigate(['/create-account']);
  }
}
