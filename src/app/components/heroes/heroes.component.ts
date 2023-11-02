import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero.model';
import { HeroesHandlerService } from './services/heroes-handler.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroesList: Array<Hero> = [];

  constructor(private heroesHandlerService: HeroesHandlerService) {}

  ngOnInit() {
    this.heroesList = this.heroesHandlerService.getHeroesList();
  }
}
