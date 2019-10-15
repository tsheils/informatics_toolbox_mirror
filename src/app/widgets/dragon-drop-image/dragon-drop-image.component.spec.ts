import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonDropImageComponent } from './dragon-drop-image.component';

describe('DragonDropImageComponent', () => {
  let component: DragonDropImageComponent;
  let fixture: ComponentFixture<DragonDropImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonDropImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonDropImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
