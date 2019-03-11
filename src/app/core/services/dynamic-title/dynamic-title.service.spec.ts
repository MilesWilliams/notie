import { TestBed, inject } from '@angular/core/testing';

import { DynamicTitleService } from './dynamic-title.service';

describe('DynamicTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicTitleService]
    });
  });

  it('should be created', inject([DynamicTitleService], (service: DynamicTitleService) => {
    expect(service).toBeTruthy();
  }));
});
