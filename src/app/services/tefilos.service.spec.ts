import { TestBed } from '@angular/core/testing';

import { TefilosService } from './tefilos.service';

describe('TefilosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TefilosService = TestBed.get(TefilosService);
    expect(service).toBeTruthy();
  });
});
