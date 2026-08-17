import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoList } from './juego-list';

describe('JuegoList', () => {
  let component: JuegoList;
  let fixture: ComponentFixture<JuegoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoList],
    }).compileComponents();

    fixture = TestBed.createComponent(JuegoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
