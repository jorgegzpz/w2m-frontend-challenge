import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesHandlerService {
  heroesList: Hero[] = [
    { id: 0, name: '' },
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
    { id: 4, name: '' },
    { id: 5, name: '' },
    { id: 6, name: '' },
    { id: 7, name: ' ' },
    { id: 8, name: '' },
    { id: 9, name: '' },
    { id: 10, name: '' },
    { id: 11, name: '' },
    { id: 12, name: '' },
  ];
}
