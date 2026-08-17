import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDetails } from './juego-details';

describe('JuegoDetails', () => {
  let component: JuegoDetails;
  let fixture: ComponentFixture<JuegoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(JuegoDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
