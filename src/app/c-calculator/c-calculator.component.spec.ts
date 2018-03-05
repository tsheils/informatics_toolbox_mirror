import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCalculatorComponent } from './c-calculator.component';

describe('CCalculatorComponent', () => {
  let component: CCalculatorComponent;
  let fixture: ComponentFixture<CCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
