import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QhtsCurveFitComponent } from './qhts-curve-fit.component';

describe('QhtsCurveFitComponent', () => {
  let component: QhtsCurveFitComponent;
  let fixture: ComponentFixture<QhtsCurveFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QhtsCurveFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QhtsCurveFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
