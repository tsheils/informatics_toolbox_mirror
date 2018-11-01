import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcatsfindExcelComponent } from './ncatsfind-excel.component';

describe('NcatsfindExcelComponent', () => {
  let component: NcatsfindExcelComponent;
  let fixture: ComponentFixture<NcatsfindExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcatsfindExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcatsfindExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
