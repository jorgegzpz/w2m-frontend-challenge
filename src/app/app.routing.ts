import { Routes } from "@angular/router";
import { HeroesPanelComponent } from "./components/heroes-panel/heroes-panel.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const appRoutes: Routes = [
  { path: 'heroes', component: HeroesPanelComponent },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
