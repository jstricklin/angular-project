import { Directive, ElementRef, HostListener, HostBinding, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    ngOnInit() {

    }
}
