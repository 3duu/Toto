import { TestBed } from '@angular/core/testing';

import { PhonegapService } from './phonegap.service';

describe('PhonegapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonegapService = TestBed.get(PhonegapService);
    expect(service).toBeTruthy();
  });
});
