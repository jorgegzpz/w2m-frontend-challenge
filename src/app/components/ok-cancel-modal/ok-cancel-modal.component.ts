import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HeroDialogData } from '../heroes/model/hero.model';

@Component({
  selector: 'app-ok-cancel-modal',
  templateUrl: './ok-cancel-modal.component.html',
  styleUrls: ['./ok-cancel-modal.component.scss'],
})
export class OkCancelModalComponent {

  constructor(
    public dialogRef: MatDialogRef<OkCancelModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroDialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
