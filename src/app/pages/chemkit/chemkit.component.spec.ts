import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemkitComponent } from './chemkit.component';

describe('ChemkitComponent', () => {
  let component: ChemkitComponent;
  let fixture: ComponentFixture<ChemkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
