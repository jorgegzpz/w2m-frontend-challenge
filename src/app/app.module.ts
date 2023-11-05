import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AddHeroFormComponent } from './components/heroes/components/add-hero-form/add-hero-form.component';
import { EditHeroFormComponent } from './components/heroes/components/edit-hero-form/edit-hero-form.component';
import { HeroesListHeaderComponent } from './components/heroes/components/heroes-list-header/heroes-list-header.component';
import { HeroesListComponent } from './components/heroes/components/heroes-list/heroes-list.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { OkCancelModalComponent } from './components/ok-cancel-modal/ok-cancel-modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroesListHeaderComponent,
    AddHeroFormComponent,
    EditHeroFormComponent,
    OkCancelModalComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
