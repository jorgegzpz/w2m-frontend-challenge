import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export interface DialogDataInput {
  label: string;
  value: string;
  formControl: FormControl;
  matcher: ErrorStateMatcher;
}

export interface DialogData {
  id: number;
  title: string;
  subtitle?: string;
  inputs?: DialogDataInput[];
}
