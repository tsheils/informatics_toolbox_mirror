import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaWebStartComponent } from './java-web-start.component';

describe('JavaWebStartComponent', () => {
  let component: JavaWebStartComponent;
  let fixture: ComponentFixture<JavaWebStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaWebStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaWebStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
