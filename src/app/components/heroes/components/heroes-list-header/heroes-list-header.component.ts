import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OkCancelModalComponent } from 'src/app/components/ok-cancel-modal/ok-cancel-modal.component';
import { Hero, ModalTitle } from '../../model/hero.model';
import { HeroesHandlerService } from '../../services/heroes-handler.service';

@Component({
  selector: 'app-heroes-list-header',
  templateUrl: './heroes-list-header.component.html',
  styleUrls: ['./heroes-list-header.component.scss'],
})
export class HeroesListHeaderComponent implements OnInit {
  buttonDisabled = true;

  constructor(
    private heroesHandlerService: HeroesHandlerService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.heroesHandlerService.heroSelected$.subscribe(heroSelected => {
      this.buttonDisabled = heroSelected === undefined;
    });
  }

  addHero() {
    this.heroesHandlerService.addHero({ name: 'New super hero', powers: ['Be the new super cool hero'] } as Hero);
  }

  editHero() {
    this.heroesHandlerService.editHero(1, 'Hero edited');
  }

  removeHero() {
    const selectedHero = this.heroesHandlerService.getSelectedHero();

    if (selectedHero) {
      const dialogRef = this.dialog.open(OkCancelModalComponent, {
        data: { title: ModalTitle.remove, subtitle: selectedHero.name, ...selectedHero },
      });

      dialogRef.afterClosed().subscribe(idToRemove => {
        this.heroesHandlerService.removeHero(+idToRemove);
      });
    }
  }
}
