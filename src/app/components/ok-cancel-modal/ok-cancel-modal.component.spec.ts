import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogDataInput } from 'src/app/model/dialog-data.model';
import { CustomErrorStateMatcher } from 'src/app/tools/custom-error-state-matcher';
import { OkCancelModalComponent } from './ok-cancel-modal.component';

describe('OkCancelModalComponent', () => {
  let component: OkCancelModalComponent;
  let fixture: ComponentFixture<OkCancelModalComponent>;
  let dialogRef: MatDialogRef<OkCancelModalComponent>;
  let inputs: DialogDataInput[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OkCancelModalComponent],
      imports: [],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(OkCancelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    inputs = [
      {
        label: 'Name',
        value: 'Hero Name',
        formControl: new FormControl('Hero Name', [Validators.required]),
        matcher: new CustomErrorStateMatcher(),
      },
      {
        label: 'Powers',
        value: 'Hero Powers',
        formControl: new FormControl('Hero Powers'),
        matcher: new CustomErrorStateMatcher(),
      },
    ];

    component = new OkCancelModalComponent(dialogRef, {
      id: 1,
      title: 'Test',
      inputs,
    });
  });

  it('should close modal when cancel button is clicked', () => {
    component.onCancel();
    expect(dialogRef.close).toHaveBeenCalled();
  });

  it('should close modal when ok button is clicked and there are no input fields', () => {
    component.onOk();
    expect(dialogRef.close).toHaveBeenCalledWith({ id: 1, title: 'Test', inputs });
  });

  it('should close modal when ok button is clicked and all input fields are valid', () => {
    component.onOk();
    expect(dialogRef.close).toHaveBeenCalled();
  });

  it('should close modal when ok button is clicked and there are invalid input fields', () => {
    if (component.data.inputs) {
      component.data.inputs[0] = {
        label: 'Name',
        value: '',
        formControl: new FormControl('', [Validators.required]),
        matcher: new CustomErrorStateMatcher(),
      };
    }
    component.onOk();
    expect(dialogRef.close).not.toHaveBeenCalled();
  });

  it('should display correct input labels and values', () => {
    if (component.data.inputs) {
      expect(component.data.inputs[0].label).toBe('Name');
      expect(component.data.inputs[0].value).toBe('Hero Name');
      expect(component.data.inputs[1].label).toBe('Powers');
      expect(component.data.inputs[1].value).toBe('Hero Powers');
    }
  });

  it('should display correct error messages for invalid input fields', () => {
    if (component.data.inputs) {
      component.data.inputs[0] = {
        label: 'Name',
        value: '',
        formControl: new FormControl('', [Validators.required]),
        matcher: new CustomErrorStateMatcher(),
      };
      component.onOk();
      expect(component.data.inputs[0].formControl.errors?.['required']).toBe(true);
    }
  });
});
