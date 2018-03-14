import { TestBed, inject } from '@angular/core/testing';

import { ComponentNameService } from './component-name.service';

describe('ComponentNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentNameService]
    });
  });

  it('should be created', inject([ComponentNameService], (service: ComponentNameService) => {
    expect(service).toBeTruthy();
  }));
});
