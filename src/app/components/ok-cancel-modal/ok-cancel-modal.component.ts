import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogData } from 'src/app/model/dialog-data.model';

@Component({
  selector: 'app-ok-cancel-modal',
  templateUrl: './ok-cancel-modal.component.html',
  styleUrls: ['./ok-cancel-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule],
})
export class OkCancelModalComponent {
  constructor(
    public dialogRef: MatDialogRef<OkCancelModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onOk() {
    if (this.data.inputs) {
      for (const input of this.data.inputs) {
        input.formControl.markAsTouched();
        if (input.formControl.errors) {
          return;
        }
      }
    }
    this.dialogRef.close(this.data);
  }
}
