import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Hero, HeroUndefinable } from '../model/hero.model';
import { HEROES_MOCK_LIST } from '../model/heroes-mock-list';

@Injectable({
  providedIn: 'root',
})
export class HeroesHandlerService {
  heroListChanged$: BehaviorSubject<Hero[]> = new BehaviorSubject(HEROES_MOCK_LIST);
  heroSelected$: Subject<HeroUndefinable> = new Subject();

  private heroesList: Hero[] = HEROES_MOCK_LIST;
  private selectedHero: HeroUndefinable = undefined;

  getHeroesList(): Hero[] {
    return this.heroesList;
  }

  getHeroById(id: number): Hero | null {
    return this.heroesList.find(hero => hero.id === id) || null;
  }

  checkHeroFilter(hero: Hero, filter: string): boolean {
    return hero.name.includes(filter);
  }

  addHero(hero: Hero): number {
    const id = this.heroesList[this.heroesList.length - 1].id + 1;
    this.heroesList.push({
      id,
      name: hero.name,
      powers: hero.powers,
    });
    this.heroListChanged$.next(this.heroesList);
    return id;
  }

  editHero(heroToEdit: Hero): number {
    const heroToEditIndex = this.heroesList.findIndex(hero => hero.id === heroToEdit.id);
    if (heroToEditIndex > -1) {
      this.heroesList[heroToEditIndex].name = heroToEdit.name;
      this.heroesList[heroToEditIndex].powers = heroToEdit.powers;
      this.heroListChanged$.next(this.heroesList);
      this.setSelectedHero();
    }
    return heroToEditIndex;
  }

  removeHero(id: number): HeroUndefinable {
    const heroToRemoveIndex = this.heroesList.findIndex(hero => hero.id === id);
    if (heroToRemoveIndex > -1) {
      const heroRemoved = this.heroesList.splice(heroToRemoveIndex, 1);
      this.heroListChanged$.next(this.heroesList);
      this.setSelectedHero();
      return heroRemoved[0];
    } else {
      return undefined;
    }
  }

  setSelectedHero(hero: HeroUndefinable = undefined): void {
    if (this.selectedHero === hero) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
    this.heroSelected$.next(this.selectedHero);
  }

  getSelectedHero(): HeroUndefinable {
    return this.selectedHero;
  }

  checkSelectedHero(filteredHeroes: Hero[]): void {
    if (this.selectedHero ?? filteredHeroes.findIndex(filteredHero => filteredHero.id === this.selectedHero?.id) === -1) {
      this.setSelectedHero();
    }
  }
}
