import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero.model';
import { HEROES_MOCK_LIST } from '../model/heroes-mock-list';

@Injectable({
  providedIn: 'root',
})
export class HeroesHandlerService {
  heroListChanged$: BehaviorSubject<Hero[]> = new BehaviorSubject(HEROES_MOCK_LIST);

  private heroesList: Hero[] = HEROES_MOCK_LIST;

  getHeroesList(): Hero[] {
    return this.heroesList;
  }

  getHeroById(id: number): Hero | null {
    return this.heroesList.find(hero => hero.id === id) || null;
  }

  getHeroByTemplate(template: string): Hero[] | null {
    return this.heroesList.filter(hero => hero.name.includes(template)) || null;
  }

  addHero(hero: Hero) {
    this.heroesList.push({
      id: this.heroesList[this.heroesList.length - 1].id + 1,
      name: hero.name,
      powers: hero.powers,
    });
    this.heroListChanged$.next(this.heroesList);
  }

  editHero(id: number, name: string): number {
    const heroToEditIndex = this.heroesList.findIndex(hero => hero.id === id);
    if (heroToEditIndex > -1) {
      this.heroesList[heroToEditIndex].name = name;
      this.heroListChanged$.next(this.heroesList);
    }
    return heroToEditIndex;
  }

  removeHero(id: number): Hero[] {
    const heroToRemoveIndex = this.heroesList.findIndex(hero => hero.id === id);
    if (heroToRemoveIndex > -1) {
      const heroRemoved = this.heroesList.splice(heroToRemoveIndex, 1);
      this.heroListChanged$.next(this.heroesList);
      return heroRemoved;
    } else {
      return [];
    }
  }
}
