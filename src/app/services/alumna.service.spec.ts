import { TestBed } from '@angular/core/testing';

import { AlumnaService } from './alumna.service';

describe('AlumnaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnaService = TestBed.get(AlumnaService);
    expect(service).toBeTruthy();
  });
});
