import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CooworkDetailsComponent } from './pages/coowork-details/coowork-details.component';

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
    pathMatch: 'full',
    canActivate: [AuthGuard],
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
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'home/details',
        component: CooworkDetailsComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  }
];
