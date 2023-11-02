import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListHeaderComponent } from './heroes-list-header.component';

describe('HeroesListHeaderComponent', () => {
  let component: HeroesListHeaderComponent;
  let fixture: ComponentFixture<HeroesListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesListHeaderComponent]
    });
    fixture = TestBed.createComponent(HeroesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
