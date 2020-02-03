import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotDisplayComponent } from './screenshot-display.component';
import {NCATSImage} from '../../models/ncatsimage';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../../assets/material/material.module';

describe('ScreenshotDisplayComponent', () => {
  let component: ScreenshotDisplayComponent;
  let fixture: ComponentFixture<ScreenshotDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            FlexLayoutModule
        ],
      declarations: [ ScreenshotDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotDisplayComponent);
    component = fixture.componentInstance;
      component.images = [
          new NCATSImage({url: './assets/images/qhts-web-browser-beta/primary.png', caption: 'Compare dose responses across assays.'}),
          new NCATSImage({url: './assets/images/qhts-web-browser-beta/browse.png', caption: 'At a glance browse qHTS data for large data sets. '}),
          new NCATSImage({url: './assets/images/qhts-web-browser-beta/helper.png', caption: 'Heat Map client helper.'})
      ];
      component.size = 30;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
