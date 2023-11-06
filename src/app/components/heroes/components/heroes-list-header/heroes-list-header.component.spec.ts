import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog } from '@angular/material/dialog';
import { HeroesListHeaderComponent } from './heroes-list-header.component';

describe('HeroesListHeaderComponent', () => {
  let component: HeroesListHeaderComponent;
  let fixture: ComponentFixture<HeroesListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesListHeaderComponent],
      providers: [{ provide: MatDialog, useValue: {} }],
    });
    fixture = TestBed.createComponent(HeroesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
