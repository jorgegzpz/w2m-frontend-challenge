import { Injectable, signal } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HEROES_MOCK_LIST } from '../model/heroes-mock-list';

@Injectable({
  providedIn: 'root',
})
export class HeroesHandlerService {
  heroesList = signal<Hero[]>(HEROES_MOCK_LIST);
  heroSelected = signal<Hero | undefined>(undefined);

  getHeroById(id: number): Hero | null {
    return this.heroesList().find(hero => hero.id === id) || null;
  }

  checkHeroFilter(hero: Hero, filter: string): boolean {
    return hero.name.toLowerCase().includes(filter.toLowerCase());
  }

  addHero(hero: Hero): void {
    this.heroesList.update(heroesList =>
      heroesList.concat({
        id: this.heroesList()[this.heroesList().length - 1].id + 1,
        name: hero.name.toUpperCase(),
        powers: hero.powers,
      })
    );
  }

  editHero(heroToEdit: Hero): number {
    const heroToEditIndex = this.heroesList().findIndex(hero => hero.id === heroToEdit.id);
    if (heroToEditIndex > -1) {
      this.heroesList()[heroToEditIndex].name = heroToEdit.name;
      this.heroesList()[heroToEditIndex].powers = heroToEdit.powers;
      this.setSelectedHero();
    }
    return heroToEditIndex;
  }

  removeHero(id: number): boolean {
      this.heroesList.update(heroesList => heroesList.filter(hero => hero.id !== id));
      this.setSelectedHero();
      return true;
  }

  setSelectedHero(hero: Hero | undefined = undefined): void {
    this.heroSelected.set(this.heroSelected() === hero ? undefined : hero);
  }

  checkSelectedHero(filteredHeroes: Hero[]): void {
    if (this.heroSelected() ?? filteredHeroes.findIndex(filteredHero => filteredHero.id === this.heroSelected()?.id) === -1) {
      this.setSelectedHero();
    }
  }
}
