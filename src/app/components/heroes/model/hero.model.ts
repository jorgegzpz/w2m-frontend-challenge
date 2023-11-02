export interface Hero {
  id: number;
  name: string;
  powers?: string[];
}

export enum HeroColum {
  id = 'Id',
  name = 'Name',
  powers = 'Powers',
}
