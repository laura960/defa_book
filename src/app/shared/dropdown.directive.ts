import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})

export class DropDownDirective{

  @HostBinding('class.open') isOpen = false;

  constructor(private pippo: ElementRef){
    // tslint:disable-next-line: no-trailing-whitespace

  }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
