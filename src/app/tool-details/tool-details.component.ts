import {
    AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Input, OnInit, Type,
    ViewChild
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import {Tool} from '../models/tool';
import {CustomContentDirective} from './custom-content.directive';
import {CCalculatorComponent} from '../pages/c-calculator/c-calculator.component';
import {ComponentNameService} from '../services/component-name.service';

@Component({
  selector: 'app-tool-details',
  templateUrl: './tool-details.component.html',
  styleUrls: ['./tool-details.component.css']
})
export class ToolDetailsComponent implements OnInit, AfterViewInit {
  @Input() tool: Tool;
    @ViewChild(CustomContentDirective, { static: true }) componentHost: CustomContentDirective;
    details = false;

    constructor(private route: ActivatedRoute,
                private metaService: Meta,
                private componentFactoryResolver: ComponentFactoryResolver,
                private componentNameService: ComponentNameService) {
    }

    ngOnInit() {
        this.route.data.subscribe(res => {
            this.tool = res.tool;
            if (this.tool && this.tool.component) {
                this.loadComponent();
                this.details = true;
            }
        });

        this.metaService.updateTag({
                content: this.tool.toolName
            },
            'property="og:description"'
        );
        this.metaService.updateTag({
                content: this.tool.description
            },
            'name="twitter:description"'
        );
        this.metaService.updateTag({
                content: this.tool.toolName
            },
            'property="og:title"'
        );
        this.metaService.updateTag({
                content: this.tool.toolName
            },
            'name="twitter:title"'
        );
        /*this.metaService.addTags([{
                content: window.location.href + '/assets/' + this.intern.mugshot,
                property: 'og:image'
            }, {
                content: window.location.href + '/assets/' + this.intern.mugshot,
                name: 'twitter:image'
            }],
            true
        );*/
    }

    ngAfterViewInit() {
        window.scrollTo(0, 0);
    }

    loadComponent() {
        const instance: Type<any> = this.componentNameService.getComponent(this.tool.component);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(instance);
        const viewContainerRef = this.componentHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.tool = this.tool;
    }
}
