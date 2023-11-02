import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeroFormComponent } from './add-hero-form.component';

describe('AddHeroFormComponent', () => {
  let component: AddHeroFormComponent;
  let fixture: ComponentFixture<AddHeroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHeroFormComponent]
    });
    fixture = TestBed.createComponent(AddHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
