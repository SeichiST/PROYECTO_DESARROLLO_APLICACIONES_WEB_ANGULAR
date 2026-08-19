import { TestBed } from '@angular/core/testing';

import { Categoriaservice } from './categoriaservice';

describe('Categoriaservice', () => {
  let service: Categoriaservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categoriaservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
