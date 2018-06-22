import { TestBed, inject } from '@angular/core/testing';

import { ResolverService } from './resolver.service';
import {HttpClientModule} from "@angular/common/http";

describe('ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
      providers: [ResolverService]
    });
  });

  it('should be created', inject([ResolverService], (service: ResolverService) => {
    expect(service).toBeTruthy();
  }));
});
