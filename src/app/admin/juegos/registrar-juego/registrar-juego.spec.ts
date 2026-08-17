import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarJuego } from './registrar-juego';

describe('RegistrarJuego', () => {
  let component: RegistrarJuego;
  let fixture: ComponentFixture<RegistrarJuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarJuego],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarJuego);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
