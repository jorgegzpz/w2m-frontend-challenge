import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputUppercaseDirective } from './input-uppercase/input-uppercase.directive';



@NgModule({
  declarations: [InputUppercaseDirective],
  exports: [InputUppercaseDirective],
  imports: [CommonModule],
})
export class DirectivesModuleModule {}
