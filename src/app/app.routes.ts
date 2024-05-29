import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CooworkDetailsComponent } from './pages/coowork-details/coowork-details.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ScheduleGuard } from './guards/schedule.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'home/details/:id',
    component: CooworkDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home/details/:id/squedule/:squeduleId',
    component: ScheduleComponent,
    canActivate: [ScheduleGuard],
    data: { title: 'Schedule' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'register-account',
    component: RegisterAccountComponent,
    data: { title: 'Register Account' }
  },

];
