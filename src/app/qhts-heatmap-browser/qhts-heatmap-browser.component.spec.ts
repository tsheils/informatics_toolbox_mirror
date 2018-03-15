import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QhtsHeatmapBrowserComponent } from './qhts-heatmap-browser.component';

describe('QhtsHeatmapBrowserComponent', () => {
  let component: QhtsHeatmapBrowserComponent;
  let fixture: ComponentFixture<QhtsHeatmapBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QhtsHeatmapBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QhtsHeatmapBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
