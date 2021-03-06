import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({ selector: "[appDropdown]" })
export class DropDownDirective {
  @HostBinding("class.show") isOpen = false;

  @HostListener("click") toggle() {
    this.isOpen = !this.isOpen;
  }
}
