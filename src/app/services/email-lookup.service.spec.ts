import { TestBed } from '@angular/core/testing';

import { EmailLookupService } from './email-lookup.service';

describe('EmailLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailLookupService = TestBed.get(EmailLookupService);
    expect(service).toBeTruthy();
  });
});
