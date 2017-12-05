import { TestBed, inject } from '@angular/core/testing';

import { ProtypeService } from './protype.service';

describe('ProtypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtypeService]
    });
  });

  it('should be created', inject([ProtypeService], (service: ProtypeService) => {
    expect(service).toBeTruthy();
  }));
});
