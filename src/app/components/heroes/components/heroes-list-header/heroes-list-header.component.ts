import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { OkCancelModalComponent } from 'src/app/components/ok-cancel-modal/ok-cancel-modal.component';
import { DialogData } from 'src/app/model/dialog-data.model';
import { Hero, HeroColum, HeroUndefinable, ModalTitle } from '../../model/hero.model';
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
    const newHero = { id: -1, name: '', powers: [] } as HeroUndefinable;
    this.openModalWithInputs(newHero, ModalTitle.add).subscribe(hero => {
      if (hero) {
        this.heroesHandlerService.addHero(hero);
      }
    });
  }

  editHero() {
    const selectedHero = this.heroesHandlerService.getSelectedHero();

    if (selectedHero) {
      this.openModalWithInputs(selectedHero, ModalTitle.edit).subscribe(hero => {
        if (hero) {
          this.heroesHandlerService.editHero(hero);
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
        if (dialogData) {
          this.heroesHandlerService.removeHero(dialogData.id);
        }
      });
    }
  }

  openModalWithInputs(hero: HeroUndefinable, title: string): Observable<HeroUndefinable> {
    const dialogRef = this.dialog.open(OkCancelModalComponent, {
      width: '500px',
      data: {
        title,
        id: hero?.id,
        inputs: [
          { label: HeroColum.name, value: hero?.name },
          { label: HeroColum.powers, value: hero?.powers?.join(',') },
        ],
      },
    });

    return dialogRef.afterClosed().pipe(
      map((dialogData: DialogData) => {
        const inputs = dialogData?.inputs;
        if (inputs && inputs.length > 0) {
          let name;
          let powers;
          for (const input of inputs) {
            if (input.label === HeroColum.name) {
              name = input.value;
            } else if (input.label === HeroColum.powers) {
              powers = input.value.split(',');
            }
          }
          if (name && powers) {
            return {
              name,
              powers,
              id: dialogData.id,
            } as Hero;
          }
        }
        return undefined;
      })
    );
  }
}
