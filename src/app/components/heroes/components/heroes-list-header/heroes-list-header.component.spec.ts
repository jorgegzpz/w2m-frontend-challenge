import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { HeroUndefinable, ModalTitle } from '../../model/hero.model';
import { HEROES_MOCK_LIST } from '../../model/heroes-mock-list';
import { HeroesHandlerService } from '../../services/heroes-handler.service';
import { HeroesListHeaderComponent } from './heroes-list-header.component';

describe('HeroesListHeaderComponent', () => {
  let component: HeroesListHeaderComponent;
  let fixture: ComponentFixture<HeroesListHeaderComponent>;
  let service: HeroesHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesListHeaderComponent],
      providers: [{ provide: MatDialog, useValue: {} }],
    });
    fixture = TestBed.createComponent(HeroesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    service = TestBed.inject<HeroesHandlerService>(HeroesHandlerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button by default', () => {
    expect(component.buttonDisabled).toBeTrue();
  });

  it('should call openModalWithInputs with no fields filled', function () {
    spyOn(component, 'openModalWithInputs').and.returnValue(of({} as HeroUndefinable));
    spyOn(service, 'addHero');

    component.addHero();

    expect(component.openModalWithInputs).toHaveBeenCalledWith({ id: -1, name: '', powers: [] }, ModalTitle.add);
  });

  it('should call openModalWithInputs with the selected hero', function () {
    const selectedHero = HEROES_MOCK_LIST[0];
    service.setSelectedHero(selectedHero);

    spyOn(component, 'openModalWithInputs').and.returnValue(of({} as HeroUndefinable));
    spyOn(service, 'editHero');

    component.editHero();

    expect(component.openModalWithInputs).toHaveBeenCalledWith(selectedHero, ModalTitle.edit);
  });
});
