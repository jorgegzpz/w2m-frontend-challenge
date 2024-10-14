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

export enum ModalTitle {
  remove = 'Are you sure you want to remove this hero?',
  edit = 'Edit the hero',
  add = 'Add a new hero',
}
