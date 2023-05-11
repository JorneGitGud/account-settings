import { TestBed } from '@angular/core/testing';

import { BackgroundManagerService } from './background-manager.service';

describe('BackgroundManagerService', () => {
  let service: BackgroundManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
