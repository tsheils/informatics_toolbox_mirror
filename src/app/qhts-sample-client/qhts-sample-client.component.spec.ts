import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QhtsSampleClientComponent } from './qhts-sample-client.component';

describe('QhtsSampleClientComponent', () => {
  let component: QhtsSampleClientComponent;
  let fixture: ComponentFixture<QhtsSampleClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QhtsSampleClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QhtsSampleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
