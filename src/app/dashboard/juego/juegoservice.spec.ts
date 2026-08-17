import { TestBed } from '@angular/core/testing';

import { JuegoService } from './juegoservice';

describe('Juego', () => {
  let service: JuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
