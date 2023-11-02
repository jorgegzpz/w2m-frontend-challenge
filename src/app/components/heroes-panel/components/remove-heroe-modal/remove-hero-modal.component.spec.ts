import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHeroModalComponent } from './remove-hero-modal.component';

describe('RemoveHeroModalComponent', () => {
  let component: RemoveHeroModalComponent;
  let fixture: ComponentFixture<RemoveHeroModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveHeroModalComponent]
    });
    fixture = TestBed.createComponent(RemoveHeroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
