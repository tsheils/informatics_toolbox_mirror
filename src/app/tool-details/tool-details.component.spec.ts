import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ToolDetailsComponent } from './tool-details.component';
import {Tool} from '../models/tool';
import {ToolBasicsComponent} from '../tool-basics/tool-basics.component';
import {MaterialModule} from '../../assets/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from '../app-routing.module';
import {ToolListComponent} from '../tool-list/tool-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ToolComponent} from '../tool/tool.component';
import {APP_BASE_HREF} from '@angular/common';
import {DataLoaderService} from '../services/data-loader.service';
import {ComponentNameService} from '../services/component-name.service';
import {UnfurlingMetaService} from '../services/unfurling-meta.service';
import {CustomContentDirective} from './custom-content.directive';
import {ActivatedRoute} from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { convertToParamMap, ParamMap, Params } from '@angular/router';
import {ToolFiltersComponent} from "../tool-filters/tool-filters.component";

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
    // Use a ReplaySubject to share previous values with subscribers
    // and pump new values into the `paramMap` observable
    private subject = new ReplaySubject<ParamMap>();
    data: {tool: {}};
    constructor() {

        this.setParamMap(
            {data: {
                tool: new Tool({
                    'toolName': 'C911 Calculator',
                    'category': 'public website',
                    'url': 'http://rnai.nih.gov/haystack/C911Calc.html',
                    'contact': 'Eugen Buehler',
                    'description': 'This is a simple JavaScript calculator that generates C911 ' +
                    'controls for a set of existing target sequences',
                    'toolType': 'website',
                    'note': 'Needs Counter',
                    'collaborators': '',
                    'visibility': 'External',
                    'obsolete': 'No',
                    'audience': 'Biologists',
                    'codebase': '',
                    'publicCodebase': 'Yes',
                    'parentProject': '',
                    'image': '',
                    'component': 'CCalculatorComponent'
                })
    }
            });
    }

    /** The mock paramMap observable */
    readonly paramMap = this.subject.asObservable();

    /** Set the paramMap observables's next value */
    setParamMap(params?: Params) {
        this.subject.next(convertToParamMap(params));
    }
}

describe('ToolDetailsComponent', () => {
    let component: ToolDetailsComponent;
    let fixture: ComponentFixture<ToolDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                MaterialModule,
                FlexLayoutModule,
                AppRoutingModule,
                HttpClientModule
            ],
            providers: [
                ActivatedRouteStub,
                DataLoaderService,
                ComponentNameService,
                UnfurlingMetaService,
                {provide: APP_BASE_HREF, useValue: '/qhts data browser'},
            ],
            declarations: [
                CustomContentDirective,
                ToolComponent,
                ToolBasicsComponent,
                ToolListComponent,
                ToolFiltersComponent,
                ToolDetailsComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolDetailsComponent);
        component = fixture.componentInstance;
        component.tool = new Tool({
            'toolName': 'C911 Calculator',
            'category': 'public website',
            'url': 'http://rnai.nih.gov/haystack/C911Calc.html',
            'contact': 'Eugen Buehler',
            'description': 'This is a simple JavaScript calculator that generates C911 controls for ' +
            'a set of existing target sequences',
            'toolType': 'website',
            'note': 'Needs Counter',
            'collaborators': '',
            'visibility': 'External',
            'obsolete': 'No',
            'audience': 'Biologists',
            'codebase': '',
            'publicCodebase': 'Yes',
            'parentProject': '',
            'image': '',
            'component': 'CCalculatorComponent'
        });
        fixture.detectChanges();
    });

    it('should create', inject([ActivatedRouteStub], (route: ActivatedRouteStub) => {
        route.setParamMap(
            {
                tool: new Tool({
                    'toolName': 'C911 Calculator',
                    'category': 'public website',
                    'url': 'http://rnai.nih.gov/haystack/C911Calc.html',
                    'contact': 'Eugen Buehler',
                    'description': 'This is a simple JavaScript calculator that generates C911 ' +
                    'controls for a set of existing target sequences',
                    'toolType': 'website',
                    'note': 'Needs Counter',
                    'collaborators': '',
                    'visibility': 'External',
                    'obsolete': 'No',
                    'audience': 'Biologists',
                    'codebase': '',
                    'publicCodebase': 'Yes',
                    'parentProject': '',
                    'image': '',
                    'component': 'CCalculatorComponent'
                })
            });
        component.tool = new Tool({
            'toolName': 'C911 Calculator',
            'category': 'public website',
            'url': 'http://rnai.nih.gov/haystack/C911Calc.html',
            'contact': 'Eugen Buehler',
            'description': 'This is a simple JavaScript calculator that generates C911 controls for a ' +
            'set of existing target sequences',
            'toolType': 'website',
            'note': 'Needs Counter',
            'collaborators': '',
            'visibility': 'External',
            'obsolete': 'No',
            'audience': 'Biologists',
            'codebase': '',
            'publicCodebase': 'Yes',
            'parentProject': '',
            'image': '',
            'component': 'CCalculatorComponent'
        });
        expect(component).toBeTruthy();
    }));
});



