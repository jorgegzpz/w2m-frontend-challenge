import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeroModalComponent } from 'src/app/components/hero-modal/hero-modal.component';
import { OkCancelModalComponent } from 'src/app/components/ok-cancel-modal/ok-cancel-modal.component';
import { DialogData } from 'src/app/model/dialog-data.model';
import { Hero, HeroColum, ModalTitle } from '../../model/hero.model';
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
    const selectedHero = this.heroesHandlerService.getSelectedHero();

    if (selectedHero) {
      const dialogRef = this.dialog.open(HeroModalComponent, {
        width: '500px',
        data: {
          title: ModalTitle.edit,
          id: selectedHero.id,
          inputs: [
            { label: HeroColum.name, value: selectedHero.name },
            { label: HeroColum.powers, value: selectedHero.powers?.join(',') },
          ],
        },
      });

      dialogRef.afterClosed().subscribe((dialogData: DialogData) => {
        const inputs = dialogData?.inputs;
        if (inputs && inputs.length > 0) {
          const name = inputs.find(input => input.label === HeroColum.name)?.value;
          const powers = inputs.find(input => input.label === HeroColum.powers)?.value.split(',');
          if (name && powers) {
            this.heroesHandlerService.editHero({
              name,
              powers,
              id: dialogData.id,
            } as Hero);
          }
        }
      });
    }
  }

  removeHero() {
    const selectedHero = this.heroesHandlerService.getSelectedHero();

    if (selectedHero) {
      const dialogRef = this.dialog.open(OkCancelModalComponent, {
        data: { title: ModalTitle.remove, subtitle: selectedHero.name, ...selectedHero },
      });

      dialogRef.afterClosed().subscribe((dialogData: DialogData) => {
        this.heroesHandlerService.removeHero(dialogData.id);
      });
    }
  }
}
