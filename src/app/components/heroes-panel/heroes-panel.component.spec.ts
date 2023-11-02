import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesPanelComponent } from './heroes-panel.component';

describe('HeroesPanelComponent', () => {
  let component: HeroesPanelComponent;
  let fixture: ComponentFixture<HeroesPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesPanelComponent]
    });
    fixture = TestBed.createComponent(HeroesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
