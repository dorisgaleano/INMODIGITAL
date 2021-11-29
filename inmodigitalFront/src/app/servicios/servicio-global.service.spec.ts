import { TestBed } from '@angular/core/testing';

import { ServicioGlobalService } from './servicio-global.service';

describe('ServicioGlobalService', () => {
  let service: ServicioGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
