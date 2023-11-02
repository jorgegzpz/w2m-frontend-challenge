import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HEROES_MOCK_LIST } from '../model/heroes-mock-list';

@Injectable({
  providedIn: 'root',
})
export class HeroesHandlerService {
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
    debugger;
    this.heroesList.push({
      ...hero,
      id: this.heroesList.length,
    });
  }

  editHero(id: number, name: string): number {
    const heroToEditIndex = this.heroesList.findIndex(hero => hero.id === id);
    if (heroToEditIndex > -1) {
      this.heroesList[heroToEditIndex].name = name;
    }
    return heroToEditIndex;
  }

  removeHero(id: number): Hero[] {
    debugger;
    const heroToRemoveIndex = this.heroesList.findIndex(hero => hero.id === id);
    return this.heroesList.splice(heroToRemoveIndex);
  }
}
