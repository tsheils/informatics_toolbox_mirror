import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNcatsCustomContent]'
})
export class CustomContentDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }

}
