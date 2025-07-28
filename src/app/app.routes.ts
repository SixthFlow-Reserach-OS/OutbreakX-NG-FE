import { Routes } from '@angular/router';
import { authGuard, loginGuard } from './guards/auth.guard';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./login/login').then(m => m.LoginComponent),
    canActivate: [loginGuard]
  },
  { 
    path: 'map',
    loadComponent: () => import('./map/map').then(m => m.MapComponent),
    canActivate: [authGuard]
  },
  { 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '/login'
  }
];