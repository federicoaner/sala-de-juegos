import { TestBed } from '@angular/core/testing';

import { ApiBanderasService } from './api-banderas.service';

describe('ApiBanderasService', () => {
  let service: ApiBanderasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBanderasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
