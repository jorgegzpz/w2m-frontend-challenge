import { AsyncPipe, NgClass, UpperCasePipe } from '@angular/common';
import { AfterViewInit, Component, effect, inject, ViewChild } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Hero, HeroColum } from '../../model/hero.model';
import { HeroesHandlerService } from '../../services/heroes-handler.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatPaginatorModule, MatTableModule, MatInputModule, UpperCasePipe, NgClass, AsyncPipe],
})
export class HeroesListComponent implements AfterViewInit {
  private readonly heroesHandlerService = inject(HeroesHandlerService);

  displayedColumns: string[] = Object.values(HeroColum);
  columnsToDisplay: string[] = Object.keys(HeroColum);

  dataSource = new MatTableDataSource<Hero>();

  heroSelected = this.heroesHandlerService.heroSelected;

  @ViewChild('paginator') paginator: MatPaginator;

  constructor() {
    effect(() => {
      const heroesList = this.heroesHandlerService.heroesList();
      this.dataSource = new MatTableDataSource(heroesList || []);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (hero: Hero, filter: string) => !filter || this.heroesHandlerService.checkHeroFilter(hero, filter);
    });
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.heroesHandlerService.heroesList() || []);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
    this.heroesHandlerService.checkSelectedHero(this.dataSource.filteredData);
  }

  highlight(heroRow: Hero) {
    this.heroesHandlerService.setSelectedHero(heroRow);
  }
}
