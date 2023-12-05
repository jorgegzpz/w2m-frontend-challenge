import { Component } from '@angular/core';
import { HeroesListHeaderComponent } from './components/heroes-list-header/heroes-list-header.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  standalone: true,
  imports: [HeroesListComponent, HeroesListHeaderComponent],
})
export class HeroesComponent {}
