export interface Hero {
  id: number;
  name: string;
  powers?: string[];
  img?: string;
}

export enum HeroColum {
  id = 'Id',
  img = 'Image',
  name = 'Name',
  powers = 'Powers',
}
