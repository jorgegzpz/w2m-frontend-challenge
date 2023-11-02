import { Component, Input } from '@angular/core';
import { Hero } from '../../model/hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  @Input() heroesList: Hero[] = [];

  displayedColumns: string[] = ['id', 'name'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
}
