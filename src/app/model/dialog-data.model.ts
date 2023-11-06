import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export interface DialogData {
  id: number;
  title: string;
  subtitle?: string;
  inputs?: [{ label: string; value: string; formControl: FormControl; matcher: ErrorStateMatcher }];
}
