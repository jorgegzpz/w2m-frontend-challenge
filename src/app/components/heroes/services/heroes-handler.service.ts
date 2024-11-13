import { Injectable, signal } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HEROES_MOCK_LIST } from '../model/heroes-mock-list';

@Injectable({
  providedIn: 'root',
})
export class HeroesHandlerService {
  heroesList = signal<Hero[]>(HEROES_MOCK_LIST);
  heroSelected = signal<Hero | undefined>(undefined);

  private heroesListArray: Hero[] = HEROES_MOCK_LIST;

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
    const heroToEditIndex = this.heroesListArray.findIndex(hero => hero.id === heroToEdit.id);
    if (heroToEditIndex > -1) {
      this.heroesListArray[heroToEditIndex].name = heroToEdit.name.toUpperCase();
      this.heroesListArray[heroToEditIndex].powers = heroToEdit.powers;
      this.heroesList.set(this.heroesListArray);
      this.setSelectedHero();
    }
    return heroToEditIndex;
  }

  removeHero(id: number): Hero | undefined {
    const heroToRemoveIndex = this.heroesListArray.findIndex(hero => hero.id === id);
    if (heroToRemoveIndex > -1) {
      const heroRemoved = this.heroesListArray.splice(heroToRemoveIndex, 1);
      this.heroesList.set(this.heroesListArray);
      this.setSelectedHero();
      return heroRemoved[0];
    } else {
      return undefined;
    }
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
