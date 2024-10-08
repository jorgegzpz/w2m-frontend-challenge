import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { OkCancelModalComponent } from 'src/app/components/ok-cancel-modal/ok-cancel-modal.component';
import { HeroUndefinable, ModalTitle } from '../../model/hero.model';
import { HEROES_MOCK_LIST } from '../../model/heroes-mock-list';
import { HeroesHandlerService } from '../../services/heroes-handler.service';
import { HeroesListHeaderComponent } from './heroes-list-header.component';

describe('HeroesListHeaderComponent', () => {
  let component: HeroesListHeaderComponent;
  let fixture: ComponentFixture<HeroesListHeaderComponent>;
  let service: HeroesHandlerService;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroesListHeaderComponent,MatSnackBarModule],
      providers: [{ provide: MatDialog, useValue: {} }],
    });
    fixture = TestBed.createComponent(HeroesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    service = TestBed.inject<HeroesHandlerService>(HeroesHandlerService);
    service['heroesList'] = HEROES_MOCK_LIST;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button by default', () => {
    expect(component.buttonDisabled).toBeTrue();
  });

  it('should subscribe to heroSelected$ observable', () => {
    spyOn(service.heroSelected$, 'subscribe');
    component.ngOnInit();
    expect(service.heroSelected$.subscribe).toHaveBeenCalled();
  });

  it('should call openModalWithInputs with no fields filled', () => {
    spyOn(component, 'openModalWithInputs').and.returnValue(of({} as HeroUndefinable));
    spyOn(service, 'addHero');

    component.addHero();

    expect(component.openModalWithInputs).toHaveBeenCalledWith({ id: -1, name: '', powers: [] }, ModalTitle.add);
  });

  it('should call openModalWithInputs with the selected hero', () => {
    const selectedHero = HEROES_MOCK_LIST[0];
    service.setSelectedHero(selectedHero);

    spyOn(component, 'openModalWithInputs').and.returnValue(of({} as HeroUndefinable));
    spyOn(service, 'editHero');

    component.editHero();

    expect(component.openModalWithInputs).toHaveBeenCalledWith(selectedHero, ModalTitle.edit);
  });

  it('should remove the selected hero', () => {
    const selectedHero = HEROES_MOCK_LIST[0];
    service.setSelectedHero(selectedHero);

    const dialogData = { title: ModalTitle.remove, subtitle: selectedHero.name, ...selectedHero };

    const dialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRef.afterClosed.and.returnValue(of(dialogData));

    dialog.open = () => dialogRef;
    const dialogSpy = spyOn(dialog, 'open').and.returnValue(dialogRef);

    const removeHeroSpy = spyOn(service, 'removeHero').and.returnValue(selectedHero);
    const selectedHeroSpy = spyOn(service, 'getSelectedHero').and.returnValue(selectedHero);

    const notifyHeroRemovedSpy = spyOn(component, 'notifyHeroRemoved');
    component.removeHero();

    expect(selectedHeroSpy).toHaveBeenCalled();
    expect(dialogSpy).toHaveBeenCalledWith(OkCancelModalComponent, { data: dialogData });
    expect(removeHeroSpy).toHaveBeenCalledWith(dialogData.id);
    expect(notifyHeroRemovedSpy).toHaveBeenCalledWith(selectedHero.name);
  });

  it('should not remove hero if dialog is cancelled', () => {
    const selectedHero = HEROES_MOCK_LIST[0];
    service.setSelectedHero(selectedHero);

    const dialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRef.afterClosed.and.returnValue(of(undefined));

    dialog.open = () => dialogRef;
    const dialogSpy = spyOn(dialog, 'open').and.returnValue(dialogRef);

    const removeHeroSpy = spyOn(service, 'removeHero');
    const selectedHeroSpy = spyOn(service, 'getSelectedHero').and.returnValue(selectedHero);

    component.removeHero();

    expect(selectedHeroSpy).toHaveBeenCalled();
    expect(dialogSpy).toHaveBeenCalledWith(OkCancelModalComponent, {
      data: { title: ModalTitle.remove, subtitle: selectedHero.name, ...selectedHero },
    });
    expect(removeHeroSpy).not.toHaveBeenCalled();
  });

  it('should not add hero if dialog is cancelled', () => {
    const dialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRef.afterClosed.and.returnValue(of(undefined));

    dialog.open = () => dialogRef;
    const dialogSpy = spyOn(dialog, 'open').and.returnValue(dialogRef);

    const addHeroSpy = spyOn(service, 'addHero');
    component.addHero();

    expect(dialogSpy).toHaveBeenCalled();
    expect(addHeroSpy).not.toHaveBeenCalled();
  });

  it('should not edit hero if dialog is cancelled', () => {
    const selectedHero = HEROES_MOCK_LIST[0];
    service.setSelectedHero(selectedHero);

    const dialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRef.afterClosed.and.returnValue(of(undefined));

    dialog.open = () => dialogRef;
    const dialogSpy = spyOn(dialog, 'open').and.returnValue(dialogRef);

    const editHeroSpy = spyOn(service, 'editHero');
    component.editHero();

    expect(dialogSpy).toHaveBeenCalled();
    expect(editHeroSpy).not.toHaveBeenCalled();
  });
});
