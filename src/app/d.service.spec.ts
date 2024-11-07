import { TestBed } from '@angular/core/testing';

import { DService } from './d.service';

describe('DService', () => {
  let service: DService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
