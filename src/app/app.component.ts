import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CooworkSubjectService } from './signalsSubject/cooworks/coowork-signals-service';
import { UserSubjectService } from './signalsSubject/user/user-signals-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [CooworkSubjectService, UserSubjectService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent {}
