import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBasicsComponent } from './tool-basics.component';

describe('ToolBasicsComponent', () => {
  let component: ToolBasicsComponent;
  let fixture: ComponentFixture<ToolBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
