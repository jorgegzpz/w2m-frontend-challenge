import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
  { path: 'heroes', loadComponent: () => import('./components/heroes/heroes.component').then(c => c.HeroesComponent), canActivate: [AuthGuard] },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./components/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) },
];
