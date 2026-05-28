import { TestBed } from '@angular/core/testing';

import { EquipmentApiService } from './equipment-api';

describe('Api', () => {
  let service: EquipmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
