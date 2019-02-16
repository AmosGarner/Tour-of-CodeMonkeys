import { TestBed } from '@angular/core/testing';

import { MonkeyService } from './monkey.service';

describe('MonkeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonkeyService = TestBed.get(MonkeyService);
    expect(service).toBeTruthy();
  });
});
