import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
