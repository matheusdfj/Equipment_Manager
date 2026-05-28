import { TestBed } from '@angular/core/testing';

import { ObservationApi } from './observation-api';

describe('ObservationApi', () => {
  let service: ObservationApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservationApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
