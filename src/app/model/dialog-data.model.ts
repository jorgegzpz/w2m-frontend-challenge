export interface DialogData {
  id: number;
  title: string;
  subtitle?: string;
  inputs?: [{ label: string; value: string }];
}
