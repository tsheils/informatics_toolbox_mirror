import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ncatsCustomContent]'
})
export class CustomContentDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }

}
