import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolvecComponent } from './molvec.component';

describe('MolvecComponent', () => {
  let component: MolvecComponent;
  let fixture: ComponentFixture<MolvecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolvecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolvecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
