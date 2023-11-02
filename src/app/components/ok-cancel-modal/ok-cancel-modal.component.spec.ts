import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkCancelModalComponent } from './ok-cancel-modal.component';

describe('OkCancelModalComponent', () => {
  let component: OkCancelModalComponent;
  let fixture: ComponentFixture<OkCancelModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OkCancelModalComponent],
    });
    fixture = TestBed.createComponent(OkCancelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
