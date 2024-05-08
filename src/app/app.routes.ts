import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    title: 'Login',
    path: 'login',
    component: LoginComponent
  },
  {
    title: 'Register Account',
    path: 'register-account',
    component: RegisterAccountComponent,
  },
];
