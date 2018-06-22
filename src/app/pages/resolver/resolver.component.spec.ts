import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverComponent } from './resolver.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../../../assets/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ToolBasicsComponent} from "../../tool-basics/tool-basics.component";
import {ResolverService} from "./services/resolver.service";
import {HttpClientModule} from "@angular/common/http";

describe('ResolverComponent', () => {
  let component: ResolverComponent;
  let fixture: ComponentFixture<ResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            FlexLayoutModule,
            HttpClientModule,
            MaterialModule
        ],
        providers : [
            ResolverService
        ],
      declarations: [
          ToolBasicsComponent,
          ResolverComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
