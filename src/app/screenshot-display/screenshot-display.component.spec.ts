import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotDisplayComponent } from './screenshot-display.component';

describe('ScreenshotDisplayComponent', () => {
  let component: ScreenshotDisplayComponent;
  let fixture: ComponentFixture<ScreenshotDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenshotDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
