import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddHeroFormComponent } from './components/heroes-panel/components/add-hero-form/add-hero-form.component';
import { EditHeroFormComponent } from './components/heroes-panel/components/edit-hero-form/edit-hero-form.component';
import { HeroesListHeaderComponent } from './components/heroes-panel/components/heroes-list-header/heroes-list-header.component';
import { HeroesListComponent } from './components/heroes-panel/components/heroes-list/heroes-list.component';
import { RemoveHeroModalComponent } from './components/heroes-panel/components/remove-heroe-modal/remove-hero-modal.component';
import { HeroesPanelComponent } from './components/heroes-panel/heroes-panel.component';
import { ListComponent } from './components/list/list.component';
import { OkCancelModalComponent } from './components/ok-cancel-modal/ok-cancel-modal.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routing';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

  @NgModule({
    declarations: [
      AppComponent,
      HeroesPanelComponent,
      HeroesListComponent,
      ListComponent,
      HeroesListHeaderComponent,
      AddHeroFormComponent,
      EditHeroFormComponent,
      RemoveHeroModalComponent,
      OkCancelModalComponent,
      PageNotFoundComponent
    ],
    imports: [
      RouterModule.forRoot(
      appRoutes,
    ),
      BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  };

