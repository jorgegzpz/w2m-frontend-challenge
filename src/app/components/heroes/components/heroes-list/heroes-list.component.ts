import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { Hero, HeroColum } from '../../model/hero.model';
import { HeroesHandlerService } from '../../services/heroes-handler.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements AfterViewInit {
  displayedColumns: string[] = Object.values(HeroColum);
  columnsToDisplay: string[] = Object.keys(HeroColum);

  dataSource: MatTableDataSource<Hero>;

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private heroesHandlerService: HeroesHandlerService) {}

  ngAfterViewInit() {
    this.heroesHandlerService.heroListChanged$
      .pipe(
        map(heroesList => {
          this.dataSource = new MatTableDataSource(heroesList || []);
          this.dataSource.paginator = this.paginator;
        })
      )
      .subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue;
    // this.dataSource = new MatTableDataSource(this.heroesHandlerService.getHeroByTemplate(templateFilter) || []);
    // this.dataSource.paginator = this.paginator;
  }
}
