import { AsyncPipe, NgClass, UpperCasePipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subject, map } from 'rxjs';
import { Hero, HeroColum, HeroUndefinable } from '../../model/hero.model';
import { HeroesHandlerService } from '../../services/heroes-handler.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatPaginatorModule, MatTableModule, MatInputModule, UpperCasePipe, NgClass, AsyncPipe],
})
export class HeroesListComponent implements AfterViewInit {
  displayedColumns: string[] = Object.values(HeroColum);
  columnsToDisplay: string[] = Object.keys(HeroColum);

  dataSource = new MatTableDataSource<Hero>();

  heroSelected$: Subject<HeroUndefinable>;

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private heroesHandlerService: HeroesHandlerService) {}

  ngAfterViewInit() {
    this.heroSelected$ = this.heroesHandlerService.heroSelected$;

    this.heroesHandlerService.heroListChanged$
      .pipe(
        map(heroesList => {
          this.dataSource = new MatTableDataSource(heroesList || []);
          this.dataSource.paginator = this.paginator;
        })
      )
      .subscribe();

    this.dataSource.filterPredicate = (hero: Hero, filter: string) => !filter || this.heroesHandlerService.checkHeroFilter(hero, filter);
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
