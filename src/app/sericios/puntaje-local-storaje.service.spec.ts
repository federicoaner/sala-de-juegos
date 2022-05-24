import { TestBed } from '@angular/core/testing';

import { PuntajeLocalStorajeService } from './puntaje-local-storaje.service';

describe('PuntajeLocalStorajeService', () => {
  let service: PuntajeLocalStorajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntajeLocalStorajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
