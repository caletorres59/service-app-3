import { TestBed, inject } from '@angular/core/testing';

import { MygiftService } from './mygift.service';

describe('MygiftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MygiftService]
    });
  });

  it('should be created', inject([MygiftService], (service: MygiftService) => {
    expect(service).toBeTruthy();
  }));
});
