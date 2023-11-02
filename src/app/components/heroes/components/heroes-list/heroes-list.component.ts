import { Component, Input } from '@angular/core';
import { Hero, HeroColum } from '../../model/hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  @Input() heroesList: Hero[] = [];

  displayedColumns: string[] = Object.values(HeroColum);
  columnsToDisplay: string[] = Object.keys(HeroColum);
}
