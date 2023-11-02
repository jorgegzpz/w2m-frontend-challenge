import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeroFormComponent } from './edit-hero-form.component';

describe('EditHeroFormComponent', () => {
  let component: EditHeroFormComponent;
  let fixture: ComponentFixture<EditHeroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeroFormComponent]
    });
    fixture = TestBed.createComponent(EditHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
