import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: 'heroes', loadComponent: () => import('./components/heroes/heroes.component').then(c => c.HeroesComponent) },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./components/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) },
];
