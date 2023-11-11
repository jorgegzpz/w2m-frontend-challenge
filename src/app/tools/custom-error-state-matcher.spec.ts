import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { CustomErrorStateMatcher } from './custom-error-state-matcher';

describe('CustomErrorStateMatcher', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [],
      imports: [],
    })
  );

  it('should return false when control is null and form is null', () => {
    const matcher = new CustomErrorStateMatcher();
    const result = matcher.isErrorState(null, null);
    expect(result).toBe(false);
  });

  // Returns false when control is valid and form is null
  it('should return false when control is valid and form is null', () => {
    const matcher = new CustomErrorStateMatcher();
    const control = new FormControl();
    const result = matcher.isErrorState(control, null);
    expect(result).toBe(false);
  });
});
