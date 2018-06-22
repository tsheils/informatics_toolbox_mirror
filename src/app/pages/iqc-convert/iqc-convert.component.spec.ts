import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IqcConvertComponent } from './iqc-convert.component';

describe('IqcConvertComponent', () => {
  let component: IqcConvertComponent;
  let fixture: ComponentFixture<IqcConvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IqcConvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IqcConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
