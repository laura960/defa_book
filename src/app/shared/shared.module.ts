import { CommonModule } from '@angular/common';
import { DropDownDirective } from './dropdown.directive';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner';
import { AlertComponent } from './alert/alert.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropDownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropDownDirective,
    CommonModule
  ],
  entryComponents: [
    AlertComponent,
  ]
})
export class SharedModule {}
