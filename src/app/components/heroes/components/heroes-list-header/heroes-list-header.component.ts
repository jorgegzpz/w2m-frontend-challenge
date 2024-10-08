import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable, map } from 'rxjs';
import { OkCancelModalComponent } from 'src/app/components/ok-cancel-modal/ok-cancel-modal.component';
import { DialogData } from 'src/app/model/dialog-data.model';
import { CustomErrorStateMatcher } from 'src/app/tools/custom-error-state-matcher';
import { Hero, HeroColum, HeroUndefinable, ModalTitle } from '../../model/hero.model';
import { HeroesHandlerService } from '../../services/heroes-handler.service';
@Component({
  selector: 'app-heroes-list-header',
  templateUrl: './heroes-list-header.component.html',
  styleUrls: ['./heroes-list-header.component.scss'],
  standalone: true,
  imports: [MatSnackBarModule, MatProgressSpinnerModule, MatButtonModule],
})
export class HeroesListHeaderComponent implements OnInit {
  buttonDisabled = true;
  showSpinner = false;

  constructor(
    private heroesHandlerService: HeroesHandlerService,
    private matSnackBar: MatSnackBar,
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
      this.showSpinner = true;
      if (hero?.name) {
        this.heroesHandlerService.addHero(hero);
        this.notifyHeroAdded(hero.name.toUpperCase());
      }
      this.hideSpinner();
    });
  }

  editHero() {
    const selectedHero = this.heroesHandlerService.getSelectedHero();

    if (selectedHero) {
      this.openModalWithInputs(selectedHero, ModalTitle.edit).subscribe(hero => {
        this.showSpinner = true;
        if (hero) {
          if (this.heroesHandlerService.editHero(hero) > -1) {
            this.notifyHeroEdited(hero.name);
          }
        }
        this.hideSpinner();
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
        this.showSpinner = true;
        if (dialogData) {
          if (this.heroesHandlerService.removeHero(dialogData.id)) {
            this.notifyHeroRemoved(selectedHero.name);
          }
        }
        this.hideSpinner();
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
          {
            label: HeroColum.name,
            value: hero?.name,
            formControl: new FormControl('', [Validators.required]),
            matcher: new CustomErrorStateMatcher(),
          },
          { label: HeroColum.powers, value: hero?.powers?.join(','), formControl: new FormControl('') },
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

  notifyHeroRemoved(heroName: string) {
    this.matSnackBar.open(`Say goodbye to ${heroName}`, 'Goodbye!');
  }

  private notifyHeroEdited(heroName: string) {
    this.matSnackBar.open(`${heroName} edited correctly`, 'Cool!');
  }

  private notifyHeroAdded(heroName: string) {
    this.matSnackBar.open(`Say hello to ${heroName}`, 'Welcome!');
  }

  private hideSpinner() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);
  }
}
