import { TestBed } from '@angular/core/testing';

import { Imagenservice } from './imagenservice';

describe('Imagenservice', () => {
  let service: Imagenservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Imagenservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
