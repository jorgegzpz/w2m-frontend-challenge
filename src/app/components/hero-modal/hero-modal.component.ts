import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/model/dialog-data.model';

@Component({
  selector: 'app-hero-modal',
  templateUrl: './hero-modal.component.html',
  styleUrls: ['./hero-modal.component.scss'],
})
export class HeroModalComponent {
  constructor(
    public dialogRef: MatDialogRef<HeroModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
