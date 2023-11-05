export interface Hero {
  id: number;
  name: string;
  powers?: string[];
}

export type HeroUndefinable = Hero | undefined;

export enum HeroColum {
  id = 'Id',
  name = 'Name',
  powers = 'Powers',
}

export interface HeroDialogData {
  id: number;
  name: string;
  title: string;
  subtitle?: string;
}

export enum ModalTitle {
  remove = 'Are you sure you want to remove this hero?',
  edit = 'Edit the hero',
  add = 'Add a new hero',
}
