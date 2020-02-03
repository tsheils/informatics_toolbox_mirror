import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcatsFooterComponent } from './ncats-footer.component';
import {MaterialModule} from '../../assets/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


describe('NcatsFooterComponent', () => {
  let component: NcatsFooterComponent;
  let fixture: ComponentFixture<NcatsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            FlexLayoutModule,
            MaterialModule
        ],
      declarations: [ NcatsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcatsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
