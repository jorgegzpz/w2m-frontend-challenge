import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesHandlerService {
  heroesList: Hero[] = [
    { id: 0, name: 'Ant-Man' },
    { id: 1, name: 'Aquaman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Black Panther' },
    { id: 4, name: 'Captain America' },
    { id: 5, name: 'Catwoman' },
    { id: 6, name: 'Daredevil' },
    { id: 7, name: 'Doctor Strange' },
    { id: 8, name: 'Green Lantern' },
    { id: 9, name: 'Hawkeye' },
    { id: 10, name: 'Hellboy' },
    { id: 11, name: 'Hulk' },
    { id: 12, name: 'Iron Fist' },
    { id: 13, name: 'Iron Man' },
    { id: 14, name: 'Spider-Man' },
    { id: 15, name: 'Miles Morales' },
    { id: 16, name: 'Superman' },
    { id: 17, name: 'Thor' },
    { id: 18, name: 'Watchmen' },
    { id: 19, name: 'Wolverine' },
    { id: 20, name: 'Wonder Woman' },
  ];
}
