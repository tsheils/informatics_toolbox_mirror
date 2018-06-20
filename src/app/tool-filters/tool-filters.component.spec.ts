import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolFiltersComponent } from './tool-filters.component';

describe('ToolFiltersComponent', () => {
  let component: ToolFiltersComponent;
  let fixture: ComponentFixture<ToolFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
