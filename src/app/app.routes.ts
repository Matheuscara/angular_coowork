import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    title: 'Login',
    path: 'login',
    component: LoginComponent,
  },
  {
    title: 'Register Account',
    path: 'register-account',
    component: RegisterAccountComponent,
  },
  // {
    // path: 'home',
    // component: LayoutComponent,
    // children: [
    //   {
    //     path: 'dashboard',
    //     component: LogadoTestComponent,
    //   },
    // ],
  // },
];
