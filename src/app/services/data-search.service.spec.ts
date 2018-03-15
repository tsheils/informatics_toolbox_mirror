import { TestBed, inject } from '@angular/core/testing';

import { DataSearchService } from './data-search.service';
import {HttpClientModule} from "@angular/common/http";
import {DataLoaderService} from "./data-loader.service";

describe('DataSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ],
      providers: [
          DataLoaderService,
          DataSearchService
      ]
    });
  });

  it('should be created', inject([DataSearchService], (service: DataSearchService) => {
    expect(service).toBeTruthy();
  }));
});
