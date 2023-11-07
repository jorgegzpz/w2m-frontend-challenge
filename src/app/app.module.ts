import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { HeroesListHeaderComponent } from './components/heroes/components/heroes-list-header/heroes-list-header.component';
import { HeroesListComponent } from './components/heroes/components/heroes-list/heroes-list.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { OkCancelModalComponent } from './components/ok-cancel-modal/ok-cancel-modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DirectivesModuleModule } from './directives/directives-module.module';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroesListHeaderComponent,
    OkCancelModalComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
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
    DirectivesModuleModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
