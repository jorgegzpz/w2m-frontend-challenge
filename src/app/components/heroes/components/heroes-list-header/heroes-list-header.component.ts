import { Component } from '@angular/core';
import { Hero } from '../../model/hero.model';
import { HeroesHandlerService } from '../../services/heroes-handler.service';

@Component({
  selector: 'app-heroes-list-header',
  templateUrl: './heroes-list-header.component.html',
  styleUrls: ['./heroes-list-header.component.scss'],
})
export class HeroesListHeaderComponent {
  constructor(private heroesHandlerService: HeroesHandlerService) {}

  addHero() {
    this.heroesHandlerService.addHero({ name: 'New super hero' } as Hero);
  }

  editHero() {
    this.heroesHandlerService.editHero(0, 'Hero edited');
  }

  removeHero() {
    this.heroesHandlerService.removeHero(0);
  }
}
