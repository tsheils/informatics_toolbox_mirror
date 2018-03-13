import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QhtsDataBrowserComponent } from './qhts-data-browser.component';

describe('QhtsDataBrowserComponent', () => {
  let component: QhtsDataBrowserComponent;
  let fixture: ComponentFixture<QhtsDataBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QhtsDataBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QhtsDataBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
