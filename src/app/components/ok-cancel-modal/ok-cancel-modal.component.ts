import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/model/dialog-data.model';

@Component({
  selector: 'app-ok-cancel-modal',
  templateUrl: './ok-cancel-modal.component.html',
  styleUrls: ['./ok-cancel-modal.component.scss'],
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
    this.dialogRef.close();
  }
}
