import { TestBed } from '@angular/core/testing';

import { MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../model/hero.model';
import { HEROES_MOCK_LIST } from '../model/heroes-mock-list';
import { HeroesHandlerService } from './heroes-handler.service';

describe('HeroesHandlerService', () => {
  let service: HeroesHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MatDialogRef, useValue: {} }],
    });
    TestBed.runInInjectionContext(() => {
      service = TestBed.inject(HeroesHandlerService);
    });
  });

  beforeEach(() => {
    service.heroesList.set(HEROES_MOCK_LIST);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of heroes equal to heroesList', () => {
    const service = new HeroesHandlerService();
    const heroesList = HEROES_MOCK_LIST;
    expect(service.heroesList()).toEqual(heroesList);
    expect(service.heroesList().length).toEqual(heroesList.length);
  });

  it('should return a hero', () => {
    const service = new HeroesHandlerService();
    const hero = service.getHeroById(HEROES_MOCK_LIST[0].id);
    expect(hero).toEqual(HEROES_MOCK_LIST[0]);
  });

  it('should return null if hero id does not exist', () => {
    const service = new HeroesHandlerService();
    const hero = service.getHeroById(-1);
    expect(hero).toBeNull();
  });

  it('should return true when hero name includes filter', () => {
    const service = new HeroesHandlerService();
    const hero: Hero = HEROES_MOCK_LIST[0];
    const filter = 'MAN';

    const result = service.checkHeroFilter(hero, filter);
    console.log(result);
    expect(result).toBe(true);
  });

  it('should return false when hero name does not include filter', () => {
    const service = new HeroesHandlerService();
    const hero: Hero = HEROES_MOCK_LIST[0];
    const filter = 'WOMAN';
    const result = service.checkHeroFilter(hero, filter);

    expect(result).toBe(false);
  });

  it('should return true when filter is empty', () => {
    const service = new HeroesHandlerService();
    const hero: Hero = HEROES_MOCK_LIST[0];
    const filter = '';

    const result = service.checkHeroFilter(hero, filter);

    expect(result).toBe(true);
  });

  it('should add a hero to the heroes list', () => {
    const service = new HeroesHandlerService();
    const hero: Hero = {
      id: -1,
      name: 'MANOLITO EL FUERTE',
      powers: ['EAT HAMBURGER WITH PICKLES', 'SLEEP LONG NAPS'],
    };

    const heroId = service.addHero(hero);

    expect(service.heroesList().length).toBeGreaterThan(HEROES_MOCK_LIST.length);
  });

  it('should update the name and powers of the hero', () => {
    const service = new HeroesHandlerService();
    const heroToEdit = HEROES_MOCK_LIST[0];
    const updatedHero = {
      id: heroToEdit.id,
      name: 'MANOLITO EL FUERTE',
      powers: ['EAT HAMBURGER WITH PICKLES', 'SLEEP LONG NAPS'],
    };

    service.editHero(updatedHero);

    expect(service.getHeroById(heroToEdit.id)).toEqual(updatedHero);
    expect(service.heroesList().find(hero => hero.id === updatedHero.id)).toEqual(updatedHero);
  });

  it('should remove a hero from the heroes list', () => {
    const service = new HeroesHandlerService();
    const heroId = HEROES_MOCK_LIST[0].id;

    const initialHeroList = [...service.heroesList()];
    const heroHasBeenRemoved = service.removeHero(heroId);
    const updatedHeroList = service.heroesList();

    expect(heroHasBeenRemoved).not.toBeUndefined();
    expect(heroHasBeenRemoved).toEqual(true);
    expect(updatedHeroList.length).toBeLessThan(initialHeroList.length);
  });
});
