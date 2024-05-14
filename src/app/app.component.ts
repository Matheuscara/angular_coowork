import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserStore } from './signals/user/user.state';
import { LayoutComponent } from './components/layout/layout.component';
import { CooworkStore } from './signals/coowork/coowork.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  providers: [UserStore, CooworkStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent {}
