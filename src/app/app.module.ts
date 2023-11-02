import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AddHeroFormComponent } from './components/heroes/components/add-hero-form/add-hero-form.component';
import { EditHeroFormComponent } from './components/heroes/components/edit-hero-form/edit-hero-form.component';
import { HeroesListHeaderComponent } from './components/heroes/components/heroes-list-header/heroes-list-header.component';
import { HeroesListComponent } from './components/heroes/components/heroes-list/heroes-list.component';
import { RemoveHeroModalComponent } from './components/heroes/components/remove-heroe-modal/remove-hero-modal.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { ListComponent } from './components/list/list.component';
import { OkCancelModalComponent } from './components/ok-cancel-modal/ok-cancel-modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesListComponent,
    ListComponent,
    HeroesListHeaderComponent,
    AddHeroFormComponent,
    EditHeroFormComponent,
    RemoveHeroModalComponent,
    OkCancelModalComponent,
    PageNotFoundComponent,
  ],
  imports: [RouterModule.forRoot(AppRoutes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
